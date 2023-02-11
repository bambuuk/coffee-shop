import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { fetchedListProducts } from '../../store/products/actions';
import './Carousel.scss';

const screenWidth = window.screen.width;
const ITEM_WIDTH = screenWidth > 575 ? 420 : 250;
// const ITEM_WIDTH = 450;

function Carousel() {
  const dispatch = useDispatch();

  const [offset, setOffset] = useState(0);

  const imgListItems = useSelector((state) => state.products.dataProducts);

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
      if (newOffset === 420) {
        newOffset = -((imgListItems.length - 1) * 420);
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
      <img
        key={item.id}
        className="carousel__item"
        src={item.imgUrl}
        alt={item.title}
        style={{ minWidth: `${ITEM_WIDTH}px`, maxWidth: `${ITEM_WIDTH}px` }}
      />
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
