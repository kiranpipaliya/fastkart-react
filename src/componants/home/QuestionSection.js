import { Link } from 'react-router-dom';

const QuestionSection = () => {
  return (
    <>
      {/* <!-- Question section Start --> */}
      <section className='question-section pt-0'>
        <h5>Didn’t find what you were looking for?</h5>
        <Link to={`${process.env.PUBLIC_URL}/category-wide`} className='btn-solid'>
          Browse Category
        </Link>
      </section>
      {/* <!-- Question section End --> */}
    </>
  );
};
export default QuestionSection;
