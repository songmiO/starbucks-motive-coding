import React, { Component } from 'react';
import DetailProductName from './DetailProductName';
import DetailProductImage from './DetailProductImage';
import DetailProductInfo from './DetailProductInfo';
import './Detail.scss';

class Detail extends Component {
  render() {
    return (
      <div className="detail">
        <DetailProductName />
        <div className="productImageWrap">
          <DetailProductImage />
          <div className="productContents">
            <DetailProductInfo />
          </div>
        </div>
      </div>
    );
  }
}

export default Detail;
