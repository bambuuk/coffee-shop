import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { fetchedListProducts } from '../../store/products/actions';
import { RootState } from '../../store/store';
import { IProducts } from '../../types/state';
import './Carousel.scss';

const screenWidth = window.screen.width;
const standartWidth = 400;
const ITEM_WIDTH = screenWidth > 575 ? standartWidth : 235;

function Carousel() {
  const dispatch = useDispatch();

  const [offset, setOffset] = useState(0);

  const imgListItems = useSelector<RootState, IProducts[]>((state) => state.products.dataProducts);

  useEffect(() => {
    if (imgListItems.length < 2) {
      axios.get('https://62a11ee47b9345bcbe46a4c5.mockapi.io/coffee-list')
        .then((res) => {
          dispatch(fetchedListProducts(res.data));
        });
    }
  }, []);

  const handleLeftArrowClick = () => {
    setOffset((currentOffset) => {
      let newOffset = currentOffset + ITEM_WIDTH;
      if (newOffset === standartWidth) {
        newOffset = -((imgListItems.length - 1) * standartWidth);
      }
      return Math.min(newOffset, 0);
    });
  };

  const handleRightArrowClick = () => {
    setOffset((currentOffset) => {
      let newOffset = currentOffset - ITEM_WIDTH;
      const maxOffset = -(ITEM_WIDTH * (imgListItems.length - 1));
      if (newOffset < maxOffset) {
        newOffset = 0;
      }
      return Math.max(newOffset, maxOffset);
    });
  };

  const imgsList = imgListItems.map((item) => {
    return (
      <Link key={item.id} className="coffee-item__link" to={`/our-coffee/${item.id}`}>
        <img
          key={item.id}
          className="carousel__item"
          src={item.imgUrl}
          alt={item.title}
          style={{ minWidth: `${ITEM_WIDTH}px`, maxWidth: `${ITEM_WIDTH}px` }}
        />
      </Link>
    );
  });

  return (
    <div className="carousel">
      <div className="container">
        <h2 className="title title_margin-top-9">Our coffee</h2>
        <div className="carousel__wrapper">
          <FaChevronLeft className="carousel__arrow" onClick={handleLeftArrowClick} />
          <div className="carousel__window">
            <div
              className="carousel__list-items"
              style={{
                transform: `translateX(${offset}px)`,
              }}
            >
              {imgsList}
            </div>
          </div>
          <FaChevronRight className="carousel__arrow" onClick={handleRightArrowClick} />
        </div>
      </div>
    </div>
  );
}

export default Carousel;
