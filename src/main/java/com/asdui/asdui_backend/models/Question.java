package com.asdui.asdui_backend.models;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "question")
public class Question {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "q_id", nullable = false)
    private Long id;

    @Column(name = "user_id", nullable = false)
    private Long userId;

    @Column(name = "q1", nullable = false)
    private Boolean Q1;

    @Column(name = "q2", nullable = false)
    private Boolean Q2;

    @Column(name = "q3", nullable = false)
    private Boolean Q3;

    @Column(name = "q4", nullable = false)
    private Boolean Q4;

    @Column(name = "q5", nullable = false)
    private Boolean Q5;

    @Column(name = "q6", nullable = false)
    private Boolean Q6;

    @Column(name = "q7", nullable = false)
    private Boolean Q7;

    @Column(name = "q8", nullable = false)
    private Boolean Q8;

    @Column(name = "q9", nullable = false)
    private Boolean Q9;

    @Column(name = "q10", nullable = false)
    private Boolean Q10;

    @Column(name = "q11", nullable = false)
    private Boolean Q11;

    @Column(name = "q12", nullable = false)
    private Boolean Q12;

    @Column(name = "visual_score", nullable = false)
    private Integer visualScore;

    @Column(name = "auditory_score", nullable = false)
    private Integer auditoryScore;


    public Question() {}

    public Question(Question otherQuestion) {
        id = otherQuestion.id;
        userId = otherQuestion.userId;
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
        setVisualScore(Q1, Q2, Q3, Q4);
        setAuditoryScore(Q5, Q6, Q7, Q8);
    }


    private void setVisualScore(Boolean q1, Boolean q2, Boolean q3, Boolean q4) {
        visualScore = (q1 ? 1 : 0) +  (q2 ? 1 : 0) + (q3 ? 1 : 0) +  (q4 ? 1 : 0);
    }

    private void setAuditoryScore(Boolean q5, Boolean q6, Boolean q7, Boolean q8) {
        auditoryScore = (q5 ? 1 : 0) +  (q6 ? 1 : 0) + (q7 ? 1 : 0) +  (q8 ? 1 : 0);
    }



    /* TODO the question will be generated as follows:
    *  Questions come in three directions - Auditory, Visual, Motor.
    *  Every question will have 2 params which are summed up and then calculated
    *
    *  Cartesian products between the 2 params:
    *   Visual | Auditory
    *   Hypo | Hyper
    *     */

}