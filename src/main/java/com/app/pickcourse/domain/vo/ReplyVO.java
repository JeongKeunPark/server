package com.app.pickcourse.domain.vo;

import lombok.*;

@NoArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class ReplyVO {
    @EqualsAndHashCode.Include
    private Long id;
    private String reportedReason;
    private Long feedId;
    private String createDate;
    private String updateDate;
}
