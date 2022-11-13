# 조건으로 탐색하기
## 학습 목표
- WHERE 조건 구문을 활용할 수 있다.
- WHERE 조건과 패턴매칭을 할 수 있다.
    - 비교구문, 문자비교 등
- NULL과 LIMIT를 활용할 수 있다. 

## WHERE 조건 구문
- 테이블 질의 시 조건 지정
    - 질의 결과에 필터를 건다.
```
SELECT [ALL | DISTINCT] 속성이름(들)
FROM        테이블이름(들)
[WHERE      검색조건(들) [LIKE 필터]]
[GROUP BY   속성이름]
[HAVING     검색조건(들)]
[ORDER BY   속성이름]
```
- 검색조건이라는 것은 비교구문. 비교구문의 값에 대해서 일치 시키는 것을 해주기 위해, 패턴매칭을 하기 위해 `LIKE`구문이 옵션으로 들어가 필터값으로 작용한다.
조건 지시 이후, 그 조건 중에서도 일치되는 것을 분류할 수 있다. 

### 사용 가능한 술어 구문
- NULL : 값이 없는 것. 
    - IS NULL, IS NOT NULL 등으로 사용. 
    - 주의 : NULL과 0은 다르다. 
- 복합조건 
    - AND : 연결 조건을 동시에 만족
    - OR : 둘 중 하나만 만족해도 됨.
    - NOT : ..

## WHERE 조건과 패턴매칭
### LIKE 절
- 쿼리 결과가 LIKE에 일치하는 결과만을 제공
```
SELECT.. WHERE..
LIKE '[연산기호]문자열[연산기호]'
```
- 연산기호는 '문자열을 얼만큼 일치시킬지'에 대한 지시.
LIKE 절에 아래 연산기호를 사용하면 일치하는 조건 지정 가능. 

## NULL/LIMIT
- 레코드는 있지만, 컬럼에 값이 없음
### NULL 값이란?
- 아직 지정되지 않은 값.
- NULL 값은 `0` `빈 문자` ` `(공백) 등과 다른 특별한 값
- NULL 값은 비교연산자로 비교가 불가능
- NULL 값의 연산을 수행하면 결과 역시 NULL 값으로 반환. 
- NULL이 있는 컬럼, 필드는 원하는 결과가 반환되지 않을 가능성이 크다. 

### 집계 함수를 사용할 때 주의할 점
- 'NULL + 숫자' 연산의 결과는 NULL
- 집계 함수 계산 시 NULL이 포함된 행은 집계에서 빠짐.
    - 잘못된 결과가 되기 때문에, 집계에서 제외되는 것. 
- 해당되는 행이 하나도 없을 경우 SUM, AVG 함수의 결과는 NULL이 되며, COUNT 함수의 결과는 0. 

## 학습 목표
- ORDER BY 구문 사용
- DISTINCT 구문 사용
- 다중조건

## ORDER BY
- 쿼리 결과를 주어진 컬럼의 오름차순, 내림차순으로 정렬해 출력
``` 
SELECT ..
WHERE .. 
ORDER BY column_name, ... [ASC | DESC]
ORDER BY column_no, ... [ASC | DESC]
```
- `ASC` : 오름차순 정렬 
`DESC` : 내림차순 정렬

## DISTINCT
- 결과 내용 중 유일하게 구분되는 것을 얻고 싶을 때 사용.
- 조회된 결과에서 중복된 데이터를 제외하고 출력
```
SELECT [DISTINCT] 속성이름(들)
FROM    테이블이름(들)
```
- SELECT 구문의 속성 앞에 사용. 
FROM 테이블에서 얻은 모든 결과에서, 조건절(WHERE)이나 ORDER BY와 상관 없이 결과물 중에서도 속성 이름의 유일한 값들만 얻을 수 있다. 중복된 것은 다 제외.
- 중복제거란 의미는
    - 다양한 레코드들의 내용 중에서 범주들만 뽑아낸다. 
    - 범주형 데이터 추출과 유사
    - 예시 : '금', '금', '은'을 중복제거하면, '금' '은'이란 범주 값만 남는다.
- 예시
bookstore 테이블에서 중복 테이블 제외해보기.
```
-- 주문 고객 목록
SELECT DISTINCT custid FROM orders;
-- 판매가격 목록
SELECT DISTINCT saleprice FROM orders;
-- 주문이 있는 고객의 숫자
SELECT count (DISTINCT custid) FROM orders;
```

## 조건제어
### 다중 조건을 제공하는 CASE 구문
- 조회된 결과에서 중복된 데이터 제외하고 출력
    - CASE는 내장 함수는 아니며, 연산자(Operator)로 분류
- CASE를 이용해서 여러 조건을 구별할 수 있다.
`WHERE`과 완전히 다르다. CASE는 결과에서 필터링하기 때문.
    - WHERE 조건절은 결과를 얻기 위한 조건을 제시하는 것. 
    - CASE-WHEN 조건 구문은 결과에서 필터링해서 사용한다.
    - DISTINCT와 다른 점은, DISTINCT의 경우 단일 중복 배제 조건을 사용하지만 CASE는 다중의 구문을 사용할 수 있다. 
```
CASE 
    WHEN 조건
    THEN '반환 값'
    WHEN 조건
    THEN '반환 값'
    ELSE 'WHEN 조건에 해당 안되는 경우의 반환 값'
END
```
- WHEN-THEN은 한 쌍이어야 한다.
- WHEN-THEN은 다수가 존재할 수 있다.
- ELSE가 존재하면 모든 조건에 해당하지 않는 경우에 반환 값을 설정할 수 있다.
- ELSE가 존재하지 않고, 조건에 맞지 않아 반환값이 없으면 NULL 반환. 

### 조건제어를 위한 IF 구문
- 조건에 따라 분기
    - 참/거짓. 두 가지만 있기 때문에 2중 분기.
- 형식 
    - IF `식`, 결과1, 결과2.
    - `식`이 참이면 결과1 출력, 거짓이면 결과2 출력. 
> SELECT IF (100>200, '참이다', '거짓이다');
- IFNULL (수식1, 수식2)
> `수식 1`이 NULL이 아니면 `수식 1`이 반환, `수식 1`이 NULL이면 `수식 2` 반환

### LIMIT 문
- SELECT로 받아온 결과(레코드)의 출력 개수를 제한하고자 할 때, SQL 문장의 제일 마지막에 사용. 
- LIMIT n : 첫 번째 행부터 n개를 출력
- LIMIT s, n : s번째 행부터 n개를 출력 (s 개의 행을 SKIP)
```
SELECT first_name, salary
    FROM employees
    ORDER BY salary DESC
    LIMIT 3;
```
```
SELECT first_name, salary
    FROM employees
    ORDER BY salary DESC
    LIMIT 10, 3;
```
