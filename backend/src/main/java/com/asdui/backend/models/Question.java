package com.asdui.backend.models;

import lombok.*;
import org.springframework.stereotype.Component;

import javax.persistence.*;
import java.util.Arrays;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;

@Getter
@Setter
public class Question {
    /* The weights are predetermined and are in a position to change in the future */
    public static final double[] VISUAL_WEIGHTS = {0.1, 0.05, 0.1, 0.1, 0.15, 0.1, 0.2, 0.2};
    public static final double[] AUDITORY_WEIGHTS = {0.2, 0.2, 0.1, 0.15, 0.15, 0.2};
    private Boolean Q1;
    private Boolean Q2;
    private Boolean Q3;
    private Boolean Q4;
    private Boolean Q5;
    private Boolean Q6;
    private Boolean Q7;
    private Boolean Q8;
    private Boolean Q9;
    private Boolean Q10;
    private Boolean Q11;
    private Boolean Q12;
    private Boolean Q13;
    private Boolean Q14;
    private Boolean Q15;
    private Integer visualScore;
    private Integer auditoryScore;
    private Integer tactileScore;

    public Question() {
    }

    public Question(Question otherQuestion) {
        Q1 = otherQuestion.getQ1();
        Q2 = otherQuestion.getQ2();
        Q3 = otherQuestion.getQ3();
        Q4 = otherQuestion.getQ4();
        Q5 = otherQuestion.getQ5();
        Q6 = otherQuestion.getQ6();
        Q7 = otherQuestion.getQ7();
        Q8 = otherQuestion.getQ8();
        Q9 = otherQuestion.getQ9();
        Q10 = otherQuestion.getQ10();
        Q11 = otherQuestion.getQ11();
        Q12 = otherQuestion.getQ12();
        Q13 = otherQuestion.getQ12();
        Q14 = otherQuestion.getQ12();
        Q15 = otherQuestion.getQ15();
        visualScore = calculateScore("visual", Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8);
        auditoryScore = calculateScore("auditory", Q9, Q10, Q11, Q12, Q13, Q14);
        tactileScore = calculateScore("tactile", Q15);
    }

    private Integer calculateScore(String type, Boolean... questions) {
        AtomicInteger index = new AtomicInteger(0);
        switch (type) {
            case "visual":
                return Arrays.stream(questions)
                        .map(item -> (item ? 1 : 0))
                        .map(item -> item * VISUAL_WEIGHTS[index.getAndIncrement()] * VISUAL_WEIGHTS.length)
                        .mapToInt(Double::intValue)
                        .sum();
            case "auditory":
                return Arrays.stream(questions)
                        .map(item -> (item ? 1 : 0))
                        .map(item -> item * AUDITORY_WEIGHTS[index.getAndIncrement()] * AUDITORY_WEIGHTS.length)
                        .mapToInt(Double::intValue)
                        .sum();
            case "tactile":
                return questions[0] ? 1 : 0; /* Always one question */
            default:
                return 0;
        }
    }
}