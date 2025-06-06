CREATE SEQUENCE SEQ_PLAN;
CREATE TABLE TBL_PLAN
(
    ID NUMBER CONSTRAINT PK_PLAN PRIMARY KEY,
    PLAN_NAME VARCHAR2(1000) NOT NULL,
    PLAN_START_DATE DATE DEFAULT SYSDATE,
    PLAN_END_DATE DATE DEFAULT SYSDATE,
    PLAN_DEADLINE DATE,
    PLAN_MAX_PERSONNEL NUMBER NOT NULL,
    PLAN_MIN_PERSONNEL NUMBER NOT NULL,
    PLAN_PRICE NUMBER NOT NULL,
    PLAN_START_ADDRESS VARCHAR2(2000) NOT NULL,
    PLAN_CONTENT VARCHAR2(2000) NOT NULL,
    PLAN_FILE_PATH VARCHAR2(2000),
    PLAN_FILE_SIZE VARCHAR2(2000),
    PLAN_FILE_NAME VARCHAR2(2000),
    MEMBER_ID NUMBER NOT NULL
        CONSTRAINT FK_PLAN_MEMBER
            REFERENCES TBL_MEMBER
                ON DELETE CASCADE,
    COURSE_ID NUMBER NOT NULL
        CONSTRAINT FK_PLAN_COURSE
            REFERENCES TBL_COURSE
                ON DELETE CASCADE,
    CREATED_DATE DATE DEFAULT SYSDATE,
    UPDATED_DATE DATE DEFAULT SYSDATE
);