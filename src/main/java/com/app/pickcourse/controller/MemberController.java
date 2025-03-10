package com.app.pickcourse.controller;

import com.app.pickcourse.domain.dto.MemberDTO;
import com.app.pickcourse.domain.vo.MemberVO;
import com.app.pickcourse.service.MemberService;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Optional;

@Controller
@RequestMapping("/join/*")
@RequiredArgsConstructor
public class MemberController {
    private final MemberService memberService;

    @GetMapping("join")
    public void goToJoinForm(MemberDTO memberDTO){}

    @PostMapping("join")
    public void join(MemberDTO memberDTO){
        memberService.kakaoJoin(memberDTO);
    }
    @GetMapping("join_check")
    public void getJoinCheck(){}

    @GetMapping("join_email")
    public String getJoinEmail(Model model) {
        model.addAttribute("memberDTO", new MemberDTO());
        return "join/join_email";
    }
    @PostMapping("join_email")
    public String join(@ModelAttribute MemberDTO memberDTO, HttpSession session, Model model) {
        if (memberService.getMember(memberDTO.getMemberEmail()).isPresent()) {
            model.addAttribute("errorMessage", "중복된 이메일입니다.");
            return "join/join_email";
        }
        memberService.join(memberDTO);
        session.setAttribute("loginUser", memberDTO);
        return "redirect:/my-page/myPageModify";
    }

}
