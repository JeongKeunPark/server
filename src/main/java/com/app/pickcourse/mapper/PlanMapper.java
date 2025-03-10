package com.app.pickcourse.mapper;

import com.app.pickcourse.domain.dto.PlanDTO;
import com.app.pickcourse.domain.vo.PlanVO;
import com.app.pickcourse.util.Pagination;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Optional;

@Mapper
public interface PlanMapper {
//    추가
    public void insert(PlanVO planVO);
//    전체 조회
    public List<PlanVO> selectAll();

//    ID로 조회
    public Optional<PlanDTO> selectById(Long Id);

//    수정
    public void update(PlanDTO planDTO);

//    삭제
    public void deleteById(Long Id);

//    MEMBER ID로 조회
    public List<PlanDTO> selectByMemberId(Pagination pagination, Long memberId);
}
