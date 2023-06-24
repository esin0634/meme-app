"use client"
import {useSelector, useDispatch} from "react-redux"
import { updateMeme, resetMeme } from "../features/memeSlice";


function MemeForm() {
  const memeState = useSelector((state) => state.meme)
    console.log(memeState)
  const dispatch = useDispatch()

  const handleReset = () => {
    dispatch(resetMeme())
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle form submission
    dispatch(updateMeme({
        topText: memeState.topText,
        bottomText: memeState.bottomText,
        isUpperCase: memeState.isUpperCase,
        fontColor: memeState.fontColor,
        hasShadow: memeState.hasShadow,
        fontSize: memeState.fontSize,
        selectedFont: memeState.selectedFont,
      }));

    // You can use the form values to create the meme or perform any other action
    console.log('Form submitted:', {
      topText,
      bottomText,
      isUpperCase,
      fontColor,
      hasShadow,
      fontSize,
      selectedFont,
    });
  };

  const handleTopTextChange = (e) => {
    dispatch(updateMeme({ topText: e.target.value }));
  };

  const handleBottomTextChange = (e) => {
    dispatch(updateMeme({ bottomText: e.target.value }));
  };

  const handleIsUpperCaseChange = (e) => {
    dispatch(updateMeme({ isUpperCase: e.target.checked }));
  };

  const handleFontColorChange = (e) => {
    dispatch(updateMeme({ fontColor: e.target.value }));
  };

  const handleHasShadowChange = (e) => {
    dispatch(updateMeme({ hasShadow: e.target.checked }));
  };

  const handleFontSizeChange = (e) => {
    dispatch(updateMeme({ fontSize: Number(e.target.value) }));
  };

  const handleSelectedFontChange = (e) => {
    dispatch(updateMeme({ selectedFont: e.target.value }));
  };


  return (
    <form onSubmit={handleSubmit} className="form border-4 bg-violet-200 drop-shadow-md text-xs p-2 ">
      <div>
        <label htmlFor="topText">Top Text:</label>
        <input
            className="bg-transparent border-2 border-violet-300 drop-shadow-lg m-1 "
          type="text"
          id="topText"
          value={memeState.topText}
          onChange={handleTopTextChange}
        />
      </div>
      <div>
        <label htmlFor="bottomText">Bottom Text:</label>
        <input
        className="bg-transparent border-2 border-violet-300 drop-shadow-lg m-1 "
          type="text"
          id="bottomText"
          value={memeState.bottomText}
          onChange={handleBottomTextChange}
        />
      </div>
      <div>
        <label htmlFor="isUpperCase">All Text in Caps:</label>
        <input
             className="bg-transparent border-2 border-violet-300 drop-shadow-lg m-1 "
          type="checkbox"
          id="isUpperCase"
          checked={memeState.isUpperCase}
          onChange={handleIsUpperCaseChange}
        />
      </div>
      <div>
        <label htmlFor="fontColor">Font Color:</label>
        <select
         className="bg-transparent border-2 border-violet-300 drop-shadow-lg m-1 "
          id="fontColor"
          value={memeState.fontColor}
          onChange={handleFontColorChange}
        >
          <option value="black">Black</option>
          <option value="white">White</option>
        </select>
      </div>
      <div>
        <label htmlFor="hasShadow">Text Shadow:</label>
        <input
         className="bg-transparent border-2 border-violet-300 drop-shadow-lg m-1 "
          type="checkbox"
          id="hasShadow"
          checked={memeState.hasShadow}
          onChange={handleHasShadowChange}
        />
      </div>
      <div>
        <label htmlFor="fontSize">Font Size:</label>
        <input
         className="bg-transparent border-2 border-violet-300 drop-shadow-lg m-1 "
          type="number"
          id="fontSize"
          value={memeState.fontSize}
          onChange={handleFontSizeChange}
        />
      </div>
      <div>
        <label htmlFor="selectedFont">Font:</label>
        <select
         className="bg-transparent border-2 border-violet-300 drop-shadow-lg m-1 "
         
          id="selectedFont"
          value={memeState.selectedFont}
          onChange={handleSelectedFontChange}
        >
          <option value="Arial">Arial</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
        </select>
      </div>
      <div>
        <button type="button" onClick={handleReset} className="className='bg-transparent hover:bg-violet-300 text-violet-500 font-semibold hover:text-white py-1 px-2 border border-violet-300 hover:border-transparent rounded">
          Reset
        </button>
      </div>
    </form>
  );
}

export default MemeForm
