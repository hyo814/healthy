# ★ healthy project ( with hyo814 ) ★

# 0. 가짜 api 서버 만들기
   json을 포트 4000으로 열어서 데이터를 인식 할 수 있도록 합니다.
   터미널 창을 열어서 npx json-server ./json/person.json --port 4000을 통해 api를 열어줍니다

-> 다른 포트를 또 열어서 person 이외의 json도 구사 합니다
ex) npx json-server ./json/death.json --port 5000

# 1. 제공된 json 데이터를 이용하여 이를 탐색 할 수 있는  폴더를 만들어서 안에 listpage - personlist - personcard 순으로 연결이 되어 있는 컴포넌트를 확인 하였습니다.
## 환자 id (person.person_id) - Person 이라는 메뉴바를 통해 서브 메뉴는 환자정보 , 사망여부를 구분해두었습니다.
  ### 한 것
  ■ 성별 (person.gender_source_value) <br>
  ■ 생년월일 (person.birth_datetime) <br>
  ■ 인종 (person.race_source_value) <br>
  ■ 민족 (person.ethnicity_source_value) <br>

### 못한 것
■ 나이 (현재 시간과 생년월일 이용) - 숫자 연산이 안됩니다. <br>
■ 사망 여부 (death.death_date 존재 여부) - 따로 빼내어 확인을 할 수 있도록 하였습니다.

# 2. 필터 기능을 이용하여 필터가 작동이 될 수 있도록 합니다.
## 못한 것
■ 성별 <br>
■ 나이 <br>
■ 인종 <br>
■ 민족 <br>
■ 사망 여부 <br>

# 3. 상세확인을 할 수 있도록 설계 합니다.
## 상세 정보에는 다음 정보가 포함되어야합니다.
### 못한 것
■ 전체 방문 수 (visit_occurrence row수 - row 부분을 이해하지 못하여 데이터(방문자ID, 환자, 방문자, 시작시간, 끝시간 )로 출력만 하였습니다<br>
■ 진단 정보 (condition_occurrence.condition_concept_id) - 데이터()를 꺼내오기 까지는 했으나 이부분을 어떠한 방법으로 홈페이지에 구축을 해야하는 것 인지 이해하기가 어려워서 우선 출력만 하였습니다.

# 4. 차트의 경우에는 데이터 부분을 추출하는 법을 잘 인지 하지 못하여 목록에서 출력한 이후에  Person 과 VictoryPie를 이용하여 출력을 하였습니다.
   ## 차트 종류<br>
   ○ 성별 환자 수 gender -> Pie Chart <br>
   ○ 인종별 환자 수 race -> Pie Chart <br>
   ○ 민족별 환자 수 ethnicity -> Pie Chart <br>


