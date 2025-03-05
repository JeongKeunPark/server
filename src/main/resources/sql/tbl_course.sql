CREATE SEQUENCE SEQ_COURSE;
CREATE TABLE TBL_COURSE(
                           ID NUMBER CONSTRAINT PK_COURSE PRIMARY KEY,
                           COURSE_TYPE CHAR(1) DEFAULT ' ',
                           COURSE_IS_VOLUNTEER CHAR(1) DEFAULT 'N',
                           COURSE_NAME VARCHAR2(1000) NOT NULL,
                           COURSE_DISTANCE VARCHAR2(1000) NOT NULL,
                           COURSE_SCHEDULE VARCHAR2(1000) NOT NULL,
                           COURSE_THEME VARCHAR2(1000) NOT NULL,
                           COURSE_CONTENT VARCHAR2(1000) NOT NULL,
                           COURSE_FILE_PATH VARCHAR2(1000) NOT NULL,
                           COURSE_FILE_SIZE VARCHAR2(1000) NOT NULL,
                           COURSE_FILE_NAME VARCHAR2(1000) NOT NULL,
                           ADMIN_ID NUMBER NOT NULL,
                           CREATED_DATE DATE DEFAULT SYSDATE,
                           UPDATED_DATE DATE DEFAULT SYSDATE,
                           CONSTRAINT FK_COURSE_ADMIN FOREIGN KEY(ADMIN_ID)
                               REFERENCES TBL_ADMIN(ID)  ON DELETE CASCADE
);
COMMENT ON COLUMN TBL_COURSE.ID IS '코스의 고유 ID (기본 키)';
COMMENT ON COLUMN TBL_COURSE.COURSE_TYPE IS '코스 유형 (A ~ E 코스)';
COMMENT ON COLUMN TBL_COURSE.COURSE_IS_VOLUNTEER IS '봉사코스 여부';
COMMENT ON COLUMN TBL_COURSE.COURSE_NAME IS '코스 이름 ';
COMMENT ON COLUMN TBL_COURSE.COURSE_DISTANCE IS '코스 거리';
COMMENT ON COLUMN TBL_COURSE.COURSE_SCHEDULE IS '코스 일정';
COMMENT ON COLUMN TBL_COURSE.COURSE_THEME IS '코스의 테마 또는 주제';
COMMENT ON COLUMN TBL_COURSE.COURSE_CONTENT IS '코스 내용 또는 세부 정보';
COMMENT ON COLUMN TBL_COURSE.COURSE_FILE_PATH IS '첨부 파일 경로';
COMMENT ON COLUMN TBL_COURSE.COURSE_FILE_SIZE IS '첨부 파일 크기';
COMMENT ON COLUMN TBL_COURSE.COURSE_FILE_NAME IS '첨부 파일 이름';
COMMENT ON COLUMN TBL_COURSE.ADMIN_ID IS '관리자 ID (외래 키)';
COMMENT ON COLUMN TBL_COURSE.CREATED_DATE IS '레코드 생성 날짜 (기본값: SYSDATE)';
COMMENT ON COLUMN TBL_COURSE.UPDATED_DATE IS '레코드 수정 날짜 (기본값: SYSDATE)';
SELECT * FROM TBL_COURSE;