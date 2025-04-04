CREATE SEQUENCE SEQ_REPLY;
CREATE TABLE TBL_REPLY(
                          ID NUMBER CONSTRAINT PK_REPLY PRIMARY KEY,
                          REPLY_CONTENT VARCHAR2(2000) NOT NULL,
                          CREATED_DATE DATE DEFAULT SYSDATE,
                          UPDATED_DATE DATE DEFAULT SYSDATE
);

COMMENT ON TABLE TBL_REPLY IS '댓글 테이블';
COMMENT ON COLUMN TBL_REPLY.ID IS '댓글의 고유 ID';
COMMENT ON COLUMN TBL_REPLY.REPLY_CONTENT IS '댓글 내용';
COMMENT ON COLUMN TBL_REPLY.CREATED_DATE IS '생성 날짜';
COMMENT ON COLUMN TBL_REPLY.UPDATED_DATE IS '수정 날짜';