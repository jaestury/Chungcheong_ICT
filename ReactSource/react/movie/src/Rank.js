import axios from "axios";
import { Button, Container, Table } from "react-bootstrap";
import { useState } from "react";

function Rank() {
  const [ranks, setRanks] = useState(null);

  // 영화 진흥위원회 일별 박스오피스 정보 가져오기
  // 오픈 API 사용.
  let getRank = () => {
    //  axios.get(정보를 가져올 주소 작성).then(데이터가 성공적으로 도착한 뒤 해야할 작업).catch(실패했을 때 해야할 작업 작성);
    axios
      .get(
        "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20221120"
      )
      // 도착한 데이터 response 라는 변수로 정의하고, 로그 찍어보기
      .then((response) => {
        // console.log(response);

        // data 만 가져오기
        // console.log(response.data);

        // 데이터 중 일일 박스 오피스 리스트(10개 순위 리스트)만 가져오기. '.'을 사용해서 데이터의 내부로 진입할 수 있다.
        console.log(response.data.boxOfficeResult.dailyBoxOfficeList);
        let movieList = response.data.boxOfficeResult.dailyBoxOfficeList;
        setRanks(movieList);
      })
      .catch(() => {
        console.log("데이터 가져오기 실패");
      });
  };

  let dispalyData = null;
  if (ranks) {
    dispalyData = (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-center">순위</th>
            <th className="text-center">증감</th>
            <th className="text-center">영화 제목</th>
            <th className="text-center">누적관객수</th>
          </tr>
        </thead>
        <tbody>
          {ranks.map((movie) => (
            <tr>
              <td className="text-center">{movie.rank}</td>
              <td className="text-center">{movie.rankInten}</td>
              <td>{movie.movieNm}</td>
              <td className="text-center">{movie.audiAcc}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  } else {
  }

  return (
    <>
      <Container className="mt-5">
        <h1>영화 순위</h1>
        <dir></dir>
        <Button onClick={getRank} variant="outline-primary" className="mb-3">
          영화 순위 가져오기
        </Button>
        {dispalyData}
      </Container>
    </>
  );
}

export default Rank;
