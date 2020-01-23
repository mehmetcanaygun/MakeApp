import React, { Fragment, useContext } from "react";
import MakeupContext from "../../context/makeupContext";
import Loading from "../layout/Loading";
import Search from "./Search";
import MakeupItem from "./MakeupItem";

const ProductList = () => {
  const makeupContext = useContext(MakeupContext);
  const { loading, products } = makeupContext;

  if (loading) return <Loading />;

  return (
    <Fragment>
      <Search />
      <div className="list mb-3">
        {products.length > 0 &&
          products.map(product => (
            <MakeupItem key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default ProductList;
