package com.workshop.isomorphic.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class IndexController {

    private static final ObjectMapper OBJECT_MAPPER = new ObjectMapper();

    @RequestMapping("/")
    public ModelAndView index() throws JsonProcessingException {

        ModelAndView modelAndView = new ModelAndView("index");
        State state = new State();
        state.setUsername("asd");
        modelAndView.addObject("state", OBJECT_MAPPER.writeValueAsString(state));
        return modelAndView;
    }

    static class State{
        private String username;

        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }
    }

}

