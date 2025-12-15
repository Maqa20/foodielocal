package az.itbrains.foodielocal.controller;

import jakarta.servlet.RequestDispatcher;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.io.PrintWriter;
import java.io.StringWriter;
import java.time.LocalDateTime;

@Controller
public class ErrorController implements org.springframework.boot.web.servlet.error.ErrorController {

    @RequestMapping("/error")
    public String handleError(HttpServletRequest request, Model model) {
        Object status = request.getAttribute(RequestDispatcher.ERROR_STATUS_CODE);
        Object error = request.getAttribute(RequestDispatcher.ERROR_MESSAGE);
        Object exception = request.getAttribute(RequestDispatcher.ERROR_EXCEPTION);
        Object path = request.getAttribute(RequestDispatcher.ERROR_REQUEST_URI);

        model.addAttribute("status", status);
        model.addAttribute("error", error);
        model.addAttribute("exception", exception != null ? exception.getClass().getName() : null);
        model.addAttribute("path", path);
        model.addAttribute("timestamp", LocalDateTime.now().toString());

        if (exception instanceof Exception) {
            Exception ex = (Exception) exception;
            StringWriter sw = new StringWriter();
            PrintWriter pw = new PrintWriter(sw);
            ex.printStackTrace(pw);
            model.addAttribute("trace", sw.toString());
        }

        return "/error/server-error";
    }
}

