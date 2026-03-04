from copy import deepcopy

from data import questions as all_questions

class QuestionService:
    def __init__(self):
        self.questions = deepcopy(all_questions)

    def get_questions(self, first_n=None):
        if first_n is not None:
            return self.questions[:first_n]
        else:
            return self.questions

    def check_answer(self, question_idx, variant_idx):
        if question_idx < 0 or question_idx >= len(self.questions):
            return False
        return variant_idx in self.questions[question_idx]['correct_variants']

