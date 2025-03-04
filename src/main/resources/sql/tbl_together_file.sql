
CREATE TABLE TBL_TOGETHER_FILE(
                                  ID NUMBER CONSTRAINT PK_TOGETHER_FILE PRIMARY KEY,
                                  TOGETHER_FEED_ID NUMBER NOT NULL,
                                  CONSTRAINT FK_TOGETHER_FILE_FILE FOREIGN KEY(ID)
                                      REFERENCES TBL_FILE(ID) ON DELETE CASCADE ,
                                  CONSTRAINT FK_TOGETHER_FILE_TOGETHER_FEED FOREIGN KEY(TOGETHER_FEED_ID)
                                      REFERENCES TBL_TOGETHER_FEED(ID) ON DELETE  CASCADE
);

COMMENT ON TABLE TBL_TOGETHER_FILE IS '함께하는 피드 파일 테이블';
COMMENT ON COLUMN TBL_TOGETHER_FILE.ID IS '함께하는 파일의 고유 ID';
COMMENT ON COLUMN TBL_TOGETHER_FILE.TOGETHER_FEED_ID IS '함께하는 피드의 고유 ID';