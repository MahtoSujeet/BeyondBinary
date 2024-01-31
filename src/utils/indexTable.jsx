import React from "react";
import { NavLink } from "react-router-dom";

import BinaryThumb from "./thumbs/binary.jpg";
import NQueensThumb from "./thumbs/nqueens.jpg";
import PathThumb from "./thumbs/path.jpg";
import SortingThumb from "./thumbs/sorting.jpg";
import WordSearch from "./thumbs/word_search.jpg";
import Filling from "./thumbs/fill.png";

import MaskedStyleSVG from "./svg/maskShapesNew.svg";

const maskStyles = {
  margin: "0 auto",
  textAlign: "center",
  backgroundImage: `url(${MaskedStyleSVG})`,
  backgroundSize: "cover",
  backgroundPosition: "50%",
  backgroundRepeat: "no-repeat",
  width: "auto",
  backgroundClip: "text",
  WebkitBackgroundClip: "text",
  color: "transparent",
};
export default class IndexTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="container mt-3">
        <div className="text-center text-light">
          <h1 style={maskStyles} className="maskText mt-1 glowing">
            Algo Techniques
          </h1>
          <p className="mt-2">Developed by <span className="text-danger">Sujeet & Ritika</span></p>
        </div>
        <center>
          <div className="row mt-4">
            <div className="col-sm-4 col-6">
              <NavLink to="/pathfinder">
                <img
                  className="img-fluid w-20 shadowB"
                  src={PathThumb}
                  alt="Path Finding"
                />
                <p className="text-light thumb-title">PathFinder</p>
              </NavLink>
            </div>
            <div className="col-sm-4 col-6">
              <NavLink to="/sorting">
                <img
                  className="img-fluid w-20 shadowB"
                  src={SortingThumb}
                  alt="Sorting"
                />
                <p className="text-light thumb-title">Sorting</p>
              </NavLink>
            </div>
            <div className="col-sm-4 col-6">
              <NavLink to="/searching">
                <img
                  className="img-fluid w-20 shadowB"
                  src={BinaryThumb}
                  alt="Searching"
                />
                <p className="text-light thumb-title">Searching</p>
              </NavLink>
            </div>
            <div className="col-sm-4 col-6">
              <NavLink to="/n-queens-problem">
                <img
                  className="img-fluid w-20 shadowB"
                  src={NQueensThumb}
                  alt="NQueens"
                />
                <p className="text-light thumb-title">N-Queens</p>
              </NavLink>
            </div>
            <div className="col-sm-4 col-6">
              <NavLink to="/word-search">
                <img
                  className="img-fluid w-20 shadowB"
                  src={WordSearch}
                  alt="Word Searching"
                />
                <p className="text-light thumb-title">Word Searching</p>
              </NavLink>
            </div>
            {/* <div className="col-sm-4 col-6">
              <NavLink to="/filling">
                <img
                  className="img-fluid w-20 shadowB"
                  src={Filling}
                  alt="Filling"
                />
                <p className="text-light thumb-title">Filling</p>
              </NavLink>
            </div> */}
          </div>
          <div style={{ overflowX: "hidden" }} className="w-4">

            <video className="android-video__asset" preload="metadata" muted playsInline="" autoPlay aria-label="an Android droid peeks its head up through a circle" poster="https://lh3.googleusercontent.com/mcO0LnHc_OwhSGXAgiqwRzwRQ2wt-ROz9cNsDhlrp2AYDOjgCbCosiTPrR8nDD_ETavR-EslLEncx1VKZkH0HPmtivCP2Vdvfrjip74SeWcD8RPqlpY" loop><source src="https://kstatic.googleusercontent.com/files/b27bbf3c8514d30efd3910abb73dafdfeebc474dd2f599f1e49f2e55aadae3eda60f7936109d932856e8519f46064f9aca9f653910a6988f8402c9935854273d" type="video/webm" /><source src="https://kstatic.googleusercontent.com/files/be090837f1a14cee5c237f52033bb3e075fdd20a873f5c29c0e3a73707d6902931396af69fe929bc95401edec5c71e1f15acfd412ccc4a477871ccbc7cdd7d1c" type="video/quicktime" /></video>
          </div>
          <div className="text-center text-light mt-4">
            Copyright Reserved by Sujeet (2024)
          </div>
        </center >
      </div >
    );
  }
}
