import React, { Fragment, useState, useContext } from "react";
import MakeupContext from "../../context/makeupContext";

const Search = () => {
  const makeupContext = useContext(MakeupContext);
  const {
    searchProducts,
    clearProducts,
    products,
    alertMsg,
    alertType
  } = makeupContext;

  const [brand, setBrand] = useState("");
  const [productType, setProductType] = useState("");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000);

  return (
    <Fragment>
      <div className="search">
        <select
          className="brand"
          defaultValue="0"
          onChange={e => {
            setBrand(e.target.value);
          }}
        >
          <option value="0">Brand</option>
          <option value="almay">Almay</option>
          <option value="alva">Alva</option>
          <option value="anna+sui">Anna Sui</option>
          <option value="annabelle">Annabelle</option>
          <option value="benefit">Benefit</option>
          <option value="boosh">Boosh</option>
          <option value="burt's+bees">Burt's Bees</option>
          <option value="butter+london">Butter London</option>
          <option value="ces't+moi">Ces't Moi</option>
          <option value="cargo+cosmetics">Cargo Cosmetics</option>
          <option value="china+glaze">China Glaze</option>
          <option value="clinique">Clinique</option>
          <option value="coastal+classic+creation">
            Coastal Classic Creation
          </option>
          <option value="colourpop">Colorpop</option>
          <option value="covergirl">Covergirl</option>
          <option value="dalish">Dalish</option>
          <option value="deciem">Deciem</option>
          <option value="dior">Dior</option>
          <option value="dr.houschka">Dr. Houschka</option>
          <option value="e.l.f">E.L.F</option>
          <option value="essie">Essie</option>
          <option value="fenty">Fenty</option>
          <option value="glossier">Glossier</option>
          <option value="green+people">Green People</option>
          <option value="iman">Iman</option>
          <option value="l'oreal">L'oreal</option>
          <option value="lotus+cosmetics+usa">Lotus Cosmetics USA</option>
          <option value="maria's+mineral+galaxy">Maria's Mineral Galaxy</option>
          <option value="marcelle">Marcelle</option>
          <option value="marienatie">Marienatie</option>
          <option value="maybelline">Maybelline</option>
          <option value="milani">Milani</option>
          <option value="mineral+fusion">Mineral Fusion</option>
          <option value="misa">Misa</option>
          <option value="mistura">Mistura</option>
          <option value="moov">Moov</option>
          <option value="nudus">Nudus</option>
          <option value="nyx">NYX</option>
          <option value="orly">Orly</option>
          <option value="pasifica">Pasifica</option>
          <option value="penny+lane+organics">Penny Lane Organics</option>
          <option value="physicians+formula">Physicians Formula</option>
          <option value="piggy+paint">Piggy Paint</option>
          <option value="pure+anada">Pure Anada</option>
          <option value="rejuva+minerals">Rejuva Minerals</option>
          <option value="revlon">Revlon</option>
          <option value="sally+b's+skin+yummies">Sally B's Skin Yummies</option>
          <option value="salon+perfect">Salon Perfect</option>
          <option value="sante">Sante</option>
          <option value="sinful+colours">Sinful Colours</option>
          <option value="smashbox">Smashbox</option>
          <option value="stila">Stila</option>
          <option value="suncoat">Suncoat</option>
          <option value="w3llpeople">W3llpeople</option>
          <option value="wet+n+wild">Wet n Wild</option>
          <option value="zorah">Zorah</option>
          <option value="zorah+biocosmetiques">Zorah Biocosmetiques</option>
        </select>
        <select
          className="product-type"
          defaultValue="0"
          onChange={e => {
            setProductType(e.target.value);
          }}
        >
          <option value="0">Product Type</option>
          <option value="blush">Blush</option>
          <option value="bronzer">Bronzer</option>
          <option value="eyebrow">Eyebrow</option>
          <option value="eyeliner">Eyeliner</option>
          <option value="eyeshadow">Eyeshadow</option>
          <option value="foundation">Foundation</option>
          <option value="lip+liner">Lip Liner</option>
          <option value="lipstick">Lipstick</option>
          <option value="mascara">Mascara</option>
          <option value="nail+polish">Nail Polish</option>
        </select>
        <input
          type="number"
          className="min-price"
          placeholder="Min"
          onChange={e => {
            setMinPrice(e.target.value);
          }}
        />
        <input
          type="number"
          className="max-price"
          placeholder="Max"
          onChange={e => {
            setMaxPrice(e.target.value);
          }}
        />
        <input
          type="button"
          className="search-btn"
          value="Search"
          onClick={() => {
            searchProducts(brand, productType, minPrice, maxPrice);
          }}
        />
      </div>
      {products.length > 0 && (
        <button
          className="clear-btn"
          onClick={() => {
            clearProducts();
          }}
        >
          <i className="fas fa-times"></i>
        </button>
      )}
      {alertMsg !== "" && (
        <div className={`alert ${alertType}`}>
          <i className="fas fa-exclamation-circle"></i> - {alertMsg}
        </div>
      )}
    </Fragment>
  );
};

export default Search;
