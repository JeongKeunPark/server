package com.app.pickcourse.mapper;

import com.app.pickcourse.domain.dto.FeedListDTO;
import com.app.pickcourse.domain.dto.RealDTO;
import com.app.pickcourse.domain.dto.ReviewDTO;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;
import java.util.Optional;

@Mapper
public interface RealFeedMapper {

    // postReviewWrite(리얼후기 작성)
    void postFeedWrite(@Param("id") Long id, @Param("memberId") Long memberId, @Param("planId") Long planId);

    List<FeedListDTO> getRealList();

    List<FeedListDTO>  getMyRealList(Long memberId);

    Optional<RealDTO> getRealModify(Long id);
}
