# 키워드 및 스토리 랜덤 추출 백엔드

## 개요
이 프로젝트는 Node.js 기반으로 키워드 및 스토리를 랜덤으로 추출하는 백엔드 서비스입니다. 두 가지 데이터셋(키워드 및 스토리)에서 랜덤 데이터를 추출하여 API를 통해 사용자에게 제공합니다.

## 주요 기능
- `keyworddata` 및 `storydata` 폴더의 데이터셋에서 키워드 및 스토리 추출
- Node.js 기반의 RESTful API 서버
- 데이터 필터링 및 다양한 파라미터 기반 검색 가능

## 기술 스택
- **언어**: JavaScript (Node.js)
- **패키지 관리**: npm (`package.json`)
- **데이터**: `keyworddata` 및 `storydata` 폴더에 저장된 데이터 사용

## 설치 및 실행 방법
1. 레포지토리를 클론합니다:
    ```bash
    git clone https://github.com/mytime501/keywordbackend
    ```
2. 프로젝트 디렉토리로 이동합니다:
    ```bash
    cd keywordbackend
    ```
3. 필요한 패키지를 설치합니다:
    ```bash
    npm install
    ```
4. 서버를 실행합니다:
    ```bash
    node app.js
    ```

## 사용 방법
- 키워드 추출 엔드포인트: `/api/keywords/random`
    - 메소드: `GET`
    - 설명: `keyworddata` 폴더에서 랜덤 키워드를 가져옵니다.

- 스토리 추출 엔드포인트: `/api/stories/random`
    - 메소드: `GET`
    - 설명: `storydata` 폴더에서 랜덤 스토리를 가져옵니다.

## 기여 방법
기여를 원하시면 이슈를 등록하거나 풀 리퀘스트를 보내주세요. 주요 변경 사항을 논의하려면 먼저 이슈를 생성하는 것이 좋습니다.

## 라이선스
이 프로젝트는 MIT 라이선스를 따릅니다.
