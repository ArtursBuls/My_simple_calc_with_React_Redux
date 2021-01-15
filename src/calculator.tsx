import React, { FC, useState } from 'react';
import { Button } from './components/button';
import { Input } from './components/input';
import 'flexboxgrid';
import { RootState } from '../src/store/types';
import { Languages } from './store/types';
import { translations } from '../src/components/locales/translations';
import { useDispatch, useSelector } from 'react-redux';
import { changeLanguage } from '../src/store/actions';
import '../src/styles/button.css';
import '../src/styles/input.css';
import '../src/styles/selector.css';

// interface Props extends PropsFromRedux {
//   name: string
// };//Ja vajag sajūgt redaksa propus ar "vietējiem propiem"...

const Calculator: FC = () => {

  const language: Languages = useSelector((state: RootState) => state.language);

  const dispatch = useDispatch();

  const [leftInput, setLeftInput] = useState<string>("");
  const [rightInput, setRightInput] = useState<string>("");
  const [action, setAction] = useState("adding");
  const [result, setResult] = useState<number>(0);

  let left = parseInt(leftInput);
  let right = parseInt(rightInput);

  const clearAllhandler = () => {
    setLeftInput("");
    setRightInput("");
    setResult(0);
  };

  const multiply = (left: number, right: number) => {
    let res = (left * right);
    (leftInput && rightInput) && setResult(res)
  };
  const add = (left: number, right: number) => {
    let res = (left + right);
    (leftInput && rightInput) && setResult(res)
  };
  const divide = (left: number, right: number) => {
    let res = (left / right);
    (leftInput && rightInput) && setResult(res)
  };
  const substract = (left: number, right: number) => {
    let res = (left - right);
    (leftInput && rightInput) && setResult(res)
  };

  return (
    <div className="cection">
      <div className="container">
        <div className="row center-xs">
          <div className="col-xs-6">
            <h1>{translations[language].calculatorName}</h1>
          </div>
        </div>
        <div className="row end-xs">
          <div className="col-xs-12">
            <select
              value={language}
              className="selector"
              onChange={(e) => { dispatch(changeLanguage(e.target.value as Languages)) }}
            >
              <option
                value="lv">LV</option>
              <option
                value="en">EN</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-3">
            < Input
              className="input"
              type="number"
              placeholder={translations[language].placeholderFirst}
              value={leftInput}
              onChange={e => setLeftInput(e.currentTarget.value)}
            />
          </div>
          <div className="col-xs-2">
            <select
              className="input"
              value={action}
              onChange={e => setAction(e.currentTarget.value)}
            >
              <option value="multiplying">{translations[language].mathFunctionMiltiplying}</option>
              <option value="dividing">{translations[language].mathFunctionDividing}</option>
              <option value="adding">{translations[language].mathFunctionAdding}</option>
              <option value="substracting">{translations[language].mathFunctionSubstracting}</option>
            </select>
          </div>
          <div className="col-xs-2">
            < Button
              className={(action === "adding") ? 'active' : " inactive"}
              onClick={() => add(left, right)}
              label={translations[language].buttMathFunctionAdd}
            />
            < Button
              className={(action === "multiplying") ? 'active' : " inactive"}
              onClick={() => multiply(left, right)}
              label={translations[language].buttMathFunctionMultiply}
            />
            < Button
              className={(action === "dividing") ? 'active' : " inactive"}
              onClick={() => divide(left, right)}
              label={translations[language].buttMathFunctionDivide}
            />
            < Button
              className={(action === "substracting") ? 'active' : " inactive"}
              onClick={() => substract(left, right)}
              label={translations[language].buttMathFunctionSubstract}
            />
          </div>
          <div className="col-xs-4">
            <Input
              className="input"
              type="number"
              placeholder={translations[language].placeholderSecond}
              value={rightInput}
              onChange={e => setRightInput(e.currentTarget.value)}
            />
          </div>
        </div>
        <div className="row start-xs">
          <div className="col-xs-3">
            <h1>{translations[language].calculatorResult}: </h1>
          </div>
          <div className="col-xs-6">
            <h1>{result}</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <Button
              onClick={() => clearAllhandler()}
              className='ordinary'
              label={translations[language].clearAllButtLabel}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;