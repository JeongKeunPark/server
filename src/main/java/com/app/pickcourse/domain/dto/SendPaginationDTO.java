package com.app.pickcourse.domain.dto;

import com.app.pickcourse.util.Pagination;
import lombok.*;

import java.util.List;

@NoArgsConstructor
@Getter @Setter @ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class SendPaginationDTO {
    private Pagination pagination;
    private List<SendMessageDTO> sendMessages;
}
