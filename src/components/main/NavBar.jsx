
import BtnAddInput from '../buttons/BtnAddInput copy';

export default function NavBar() {


  return (

    <div>

      <nav className="navBar">
        <button className="buttonNav" id="addImage">
          Add image
        </button>
        <button className="buttonNav" id="addText">
          Add text
        </button>

        <div>
          <BtnAddInput />
        </div>

      </nav>
    </div>
  );
}