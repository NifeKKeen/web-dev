from question import QuestionService


def get_int_input(text):
    int_input = None
    while int_input is None:
        try:
            int_input = int(input(text))
            return int_input
        except Exception as e:
            print(f"Invalid input: {e}")

    return int_input


class QuizGame:
    def __init__(self):
        self.question_service = QuestionService()

        self.correct_answers = 0
        self.questions_count = min(
            get_int_input("Enter number of questions: "),
            len(self.question_service.get_questions())
        )

    def start(self):
        for question_idx, question in enumerate(self.question_service.get_questions(self.questions_count)):
            print(question['question'])
            for i, variant in enumerate(question['variants']):
                print(f"{i + 1}. {variant}")

            variant_idx = int(get_int_input("Enter your choice: ")) - 1
            if self.question_service.check_answer(question_idx, variant_idx):
                self.correct_answers += 1
                print("Correct!")
            else:
                print("Incorrect...")

            print()

        print(f"You got {self.correct_answers} out of {self.questions_count} questions correct!")
        print(f"Score: {self.correct_answers / self.questions_count * 100:.2f}%")

if __name__ == "__main__":
    game = QuizGame()
    game.start()
