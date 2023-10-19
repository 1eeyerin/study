import Checkbox from "../components/Checkbox";
import { useNavigate } from "react-router-dom";
import {useLanguageList} from "../context/LanguageProvider";

const CHECK_LIST = ["C", "Java", "JavaScript", "Python", "Haskell", "Scala"];

const Main = () => {
  const { languages, setLanguages } = useLanguageList();
  const navigate = useNavigate();

  const onClick = () => {
    if (!languages.length) {
      alert('하나라도 선택해주세요.');
      return;
    }

    navigate('/result');
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id } = e.target;

    setLanguages(
      prev => prev.includes(id) ?
        prev.filter(word => id !== word)
        : [...prev, id]
    );
  }

  return (
    <>
      <fieldset>
        {CHECK_LIST.map((name) => {
          const isChecked = languages.includes(name);

          return (
            <Checkbox
              id={name}
              key={name}
              name="applied-skills"
              label={name}
              checked={isChecked}
              onChange={onChange}
            />
          )
        })}
      </fieldset>
      <button type="button" onClick={onClick}>다음페이지로 이동</button>
    </>
  )
}

export default Main;