CREATE TABLE TBL_VOLUNTEER(
                              ID NUMBER CONSTRAINT PK_VOLUNTEER PRIMARY KEY,
                              VOLUNTEER_START_DATE DATE NOT NULL,
                              VOLUNTEER_END_DATE DATE NOT NULL,
                              VOLUNTEER_DEADLINE DATE NOT NULL,
                              CREATED_DATE DATE DEFAULT SYSDATE,
                              UPDATED_DATE DATE DEFAULT SYSDATE,
                              CONSTRAINT FK_VOLUNTEER_COURSE FOREIGN KEY(ID)
                              REFERENCES TBL_COURSE(ID)  ON DELETE CASCADE
);

COMMENT ON COLUMN TBL_VOLUNTEER.ID IS '봉사 일정의 고유 ID (기본 키)';
COMMENT ON COLUMN TBL_VOLUNTEER.VOLUNTEER_START_DATE IS '봉사 시작 날짜';
COMMENT ON COLUMN TBL_VOLUNTEER.VOLUNTEER_END_DATE IS '봉사 종료 날짜';
COMMENT ON COLUMN TBL_VOLUNTEER.VOLUNTEER_DEADLINE IS '봉사 신청 마감 날짜';
COMMENT ON COLUMN TBL_VOLUNTEER.CREATED_DATE IS '레코드 생성 날짜 (기본값: SYSDATE)';
COMMENT ON COLUMN TBL_VOLUNTEER.UPDATED_DATE IS '레코드 수정 날짜 (기본값: SYSDATE)';