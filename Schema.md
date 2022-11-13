# 스키마 생성과 테이블 데이터 탐색
## 학습 목표 
- SQL 언어를 이해할 수 있다.
- SQL DDL, DML 명령 이해할 수 있다.

### SHOW 명령
- 데이터베이스 관련 대부분의 정보를 얻을 수 있다.
- MySQL에서 제공하는 명령어. 표준 SQL 명령어는 아님. 
#### 예시
- 데이터베이스설정 확인
> SHOW VARIABELS;
- 데이터베이스 설정 중에서 "char_"로 시작하는 변수 확인.
> SHOW variables like 'char_%';
- 스키마 목록 확인
> SHOW DATABASES;

> SHOW TABLES; (FROM lecture;)
### SHOW statement
- 어떤 데이터베이스가 있는지 확인
- Database 전체 목록 출력
- Database 전체 테이블 목록 출력....

## DDL 명령 사용하기
- CREATE 
    - Schema, Table 생성
- ALTER 
    - Table 속성 변경
- DROP
    - Table 제거
    
### Database 생성 = CREATE
- `if not exists` : DB 생성시 존재 여부에 따라 쿼리 진행.
```
CREATE DATABASE [IF NOT EXISTS] db_name 
{
    ~~~~
}
```
- 예
> creaet database lecture;
USE lecture;
- 위와 같이 해주어야 lecture 라는 데이터베이스를 사용할 수 있다.

### DB, User 추가/수정/삭제 시 DCL 명령 활용
- 특정 데이터베이스의 모든 테이블에 접근/추가/수정/삭제 가능
- 사용자 권한 처리. 

## Table 관련 명령
#### CREATE
- 테이블 신규 생성
#### ALTER
- 테이블 구조 변경
#### RENAME
- 테이블 명 변경
#### DROP 
- 테이블 삭제
#### TRUNCATE 
- 테이블 데이터의 모든 내용 삭제

### DB, User 추가/수정/삭제 시 DCL 명령 활용
- 테이블 구성, 속성과 속성에 대한 제약 정의, 기본키및 외래키를 정의하는 명령
→ PRIMARY KEY : 기본키를 정할 때 사용
→ FOREIGN KEY : 외래키를 지정할 때 사용
→ ON UPDATE와 ON DELETE : 외래키 속성과 수정과 투플 삭제 시 동작을 나타냄. 
- 테이블 자체의 기본적 구성요소 지정.
    - `PRIMARY KEY`는 중요 속성. 인덱스라고 하는 것으로 생성된다. 별도의 인덱스 테이블에 등록되고, 검색 속도에서 많은 차이가 나게 된다. 
    - 테이블의 제약조건으로, `PRIMARY KEY`를 기준으로 다른 테이블과 관계를 맺거나 한다.
    - 다른 테이블과 직접적으로 연관을 맺는 것은 `FOREIGN KEY`. FOREIGN KEY로 속성의 이름을 주면 다른 테이블과 연관을 지을 수 있음. 연관 지었을 때 해당되는 테이블이 변경되었을 때 연관된 테이블에 알려줘야하는 요건을 FOREIGN KEY 밑에 있는 제약조건으로 만들어 줄 수 있다.
### 데이터 종류
### DROP 문은 테이블을 삭제하는 명령 

## 제약조건
1. Database 테이블 레벨에서 특정한 규칙 설정
2. 예상치 못한 데이터의 손실이나 일관성을 어기는 데이터의 추가, 변경 등을 예방
    - 중복 배제 등, 일관성을 지키기 위해서
    - 관계대수의 가장 핵심적인 파트가 중복을 배제하는 것. 
    - 배제하는 동안 사용자가 실수를 할 수 있기 때문에 제약조건을 붙일 수 있게 만들어준 것. 
3. 종류
- NOT NULL
    - NULL 값을 갖을 수 없음. 
- UNIQUE
    - 중복 배제
- PRIMARY KEY / FOREIGN KEY
- CHECK
- DEFAULT 
    - 특별한 지시 데이터가 없으면, DEFAULT 값으로 생성.

#### 테이블 생성 시 기본키 지정
```
CREATE TABLE BookLibrary{
    bookid INTEGER PRIMARY KEY,
    bookname  VARCHAR(20),
    publisher VARCHAR(20),
    price   INTEGER
};
```
#### 복합키 지정
- bookid 같은 단일 값을 갖는 속성이 없다면 
- 두 개 이상의 복합 속성으로 사용.
    - bookname, publisher를 기본키로 사용해주기 위해서 괄호를 사용, 복합키를 지정한다.
```
CREATE TABLE BookLibrary{
    bookname    VARCHAR(20),
    publisher   VARCHAR(20),
    price       INTEGER,
    PRIMARY KEY (bookname, publisher)
};
```
#### 기본값 지정
- 두 개의 속성 bookname, publisher 복합키 지정
    - bookname은 NULL 값을 갖을 수 없고, publisher은 같은 값이 있으면 안됨.
    - price에 값이 입력되지 않을 경우 기본 값 10000으로 설정
    - 가격은 최소 5000이상으로 한다.
```
CREATE TABLE BookLibrary{
    bookname    VARCHAR(20) NOT NULL,
    publisher   VARCHAR(20) UNIQUE,
    price       INTEGER     DEFAULT 10000 CHECK(price > 5000),
    PRIMARY KEY (bookname, publisher)
};
```

### ALTER 문
- 생성된 테이블의 속성과 속성에 관한 제약을 변경, 기본키 및 외래키를 변경함.
- ADD, DROP은 속성을 추가, 제거할 때 사용
- MODIFY는 속성의 기본값을 설정, 변경, 삭제할 때 사용
- ADD <제약이름>, DROP <제약이름>은 제약사항을 추가, 삭제할 때 사용. 
```
ALTER TABLE 테이블이름
[ADD 속성이름 테이블 이름]
    [DROP COLUMN 속성이름]
    [MODIFY 속성이름 데이터타입]
    [MODIFY 속성이름 [NULL | NOT NULL]]
    [ADD PRIMARY KEY(속성이름)]
    [[ADD|DROP] PRIMARY KEY]
```

## DESCRIBE
- 테이블, 컬럼의 속성 출력
- `SHOW`는 데이터 베이스 시스템에 대한 내용을 보기 위해 사용.
`DESCRIBE`는 SQL 명령으로, SQL의 대상인 스키마와 테이블의 내용을 볼 수 있음. 
- 현재 스키마 안에 있는 테이블의 구성 출력 
    - 컬럼 속성 출력
```
{EXPLAIN | DESCRIBE | DESC}     
    tbl_name [col_name | wild]
```

## DML
- SELECT
    - 테이블의 레코드에 대한 질의를 통해 row로 결과 반환
- INSERT
    - 테이블에 새 레코드 삽입
- DELETE
    - 테이블의 특정 조건에 맞는 레코드 삭제
- UPDATE
    - 테이블의 레코드 필드를 갱신

### SELECT 문과 FROM 절 구문 :
- MySQL은 찾은 전체 row를 출력하고
- 마지막에 전체 row 수와 쿼리 실행에 걸린 시간 표시. 

```
SELECT * FROM (테이블이름);
WHERE
ORDER BY
...
```
#### 단일 컬럼
- SELECT 구문에 하나의 컬럼 이름만 지정.
#### 다중 컬럼 지정 
- SELECT 구문에 여러 개의 열 이름을 `,(콤마)`로 나열.
    - 여러 열을 선택적으로 사용할 수 있음. 
```
SELECT 컬럼이름, 컬럼이름, 컬럼이름
FROM 테이블이름
여기의 컬럼 이름은 FROM 절의 테이블에 속한 컬럼이여야 한다. 
```
### 주석
- 쿼리에 주석을 사용해 설명을 달 수 있음
- 여러 줄 주석은 `/* */`로 둘러쌀 수 있음.
    - 프로그램에 반영하고 싶지 않은 설명들은 `/* */`에 넣자.
- 한 줄 주석은 `--` 다음에 작성. 


## 학습 목표
- DML 명령으로 레코드를 관리할 수 있다.
- DDL 명령으로 스키마/테이블 관리를 할 수 있다.
- INSERT, UPDATE, DELETE
- 아주 조심해야하는 명령어들. 

## INSERT, UPDATE, DELETE
### INSERT 문은 새로운 레코드(튜플)을 삽입하는 명령
```
INSERT INTO 테이블이름[속성리스트]
VALUES (값1, 값2, 값3, ...);
```

### UPDATE 문은 특정 속성 값을 수정하는 명령
```
UPDATE 테이블 이름
SET     [속성이름1=값1, 속성이름2=값2, 속성이름3=값3, ...]
[WHERE <검색조건>;]      조건 구문을 활용할 수도 있다.
```
#### MySQL8 이후
- Unsafe Update
- Error Code 1175.
보안문제로 Unsafe한 Update를 방지하고자, 기본으로 지정되어 있다. 
- 제약조건이 없다면 테이블의 모든 데이터를 수정, 삭제할 수도 있다. 
- `SQL_SAFE_UPDATES`를 활성화하고 Update를 수행하자. 
    - MySQL의 글로벌 환경변수 `SET SQL_SAFE_UPDATES`를 통해 해지 가능.
    - `my.ini`, 환경설정 통해서도 가능
- 예시 : Customer 테이블에서 고객번호 5인 고객의 주소를 '대한민국 부산'으로 변경
```
SET SQL_SAFE_UPDATE=0;   // Safe Updates 옵션 해제.
UPDATE Customer
SET    address='대한민국 부산'
WHERE  custid=5;          // 제약조건문이 없다면, 테이블의 모든 데이터가 수정되는 사고가 생길 수 있다. 
```

## Schema 와 Table 구문
- 다른 스키마 안의 테이블 조회
### 스키마 건너 SQL 명령을 수행할 수 있음. 
- 대부분의 SQL 구분은 Schema를 `.`(dot)로 지정해 작성할 수 있다.
    - 테이블 이름을 `Schema.Table_name` 형식으로 지시.
    - bookstore.book, lecture.pet
