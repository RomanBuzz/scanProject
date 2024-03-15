import * as React from "react";
import { Link } from "react-router-dom";

import "../styles/Main.css";

function Main() {
    let serviceName = "сервис по поиску\n\публикаций\n\о компании\n\по его ИНН";
    let serviceInfo = "Комплексный анализ публикаций, получение данных\n\в формате PDF на электронную почту.";
    let groupElement;

    const carousel = () => {
        let arrowLeft = groupElement.querySelector('.carousel__arrow.arrow_left');
        let arrowRight = groupElement.querySelector('.carousel__arrow.arrow_right');
        let itemsGroup = groupElement.querySelector('.tabs-collection');
        let items = groupElement.querySelectorAll('.tabs-collection__item');
        let node;
        arrowLeft.onclick = () => {
            node = items[0];
            items[0].remove();
            itemsGroup.appendChild(node);
            items = groupElement.querySelectorAll('.tabs-collection__item');
        }
        arrowRight.onclick = () => {
            node = items[items.length - 1];
            items[items.length - 1].remove();
            itemsGroup.insertBefore(node, items[0]);
            items = groupElement.querySelectorAll('.tabs-collection__item');
        }
    }

    React.useEffect(() => {
        carousel();
    }, []);

    return (
        <>
            <div className="main__group_1" >
                <div className="column column--left">
                    <h1 className="group_name" style={
                        {
                            whiteSpace: 'pre-line',
                        }
                    }>
                        {serviceName}
                    </h1>
                    <div className="text_info" style={
                        {
                            whiteSpace: 'pre-line',
                        }
                    }>
                        {serviceInfo}
                    </div>
                    <button>Запросить данные</button>
                </div>
                <div className="column column--right">
                    <img src={require('./../images/main_group_1_logo.svg')} alt="main logo" />
                </div>
            </div >

            <div className="main__group_2" ref={(element) => { groupElement = element }}>
                <div className="group_name">Почему именно мы</div>
                <div className="carousel">
                    <img className="carousel__arrow arrow_left" src={require('./../images/arrow_left.svg')} alt="left arrow" />
                    <div className="tabs-collection">
                        <div className="tabs-collection__item">
                            <img src={require('./../images/carousel_01.svg')} alt="carousel item logo" />
                            <div className="text_info">
                                Высокая и оперативная скорость обработки заявки
                            </div>
                        </div>
                        <div className="tabs-collection__item">
                            <img src={require('./../images/carousel_02.svg')} alt="carousel item logo" />
                            <div className="text_info">
                                Огромная комплексная база данных, обеспечивающая объективный ответ на запрос
                            </div>
                        </div>
                        <div className="tabs-collection__item">
                            <img src={require('./../images/carousel_03.svg')} alt="carousel item logo" />
                            <div className="text_info">
                                Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству
                            </div>
                        </div>
                        <div className="tabs-collection__item">
                            <img src={require('./../images/carousel_02.svg')} alt="carousel item logo" />
                            <div className="text_info">
                                Блок 4: ещё какой-то классный текст о преимуществах...
                            </div>
                        </div>
                        <div className="tabs-collection__item">
                            <img src={require('./../images/carousel_02.svg')} alt="carousel item logo" />
                            <div className="text_info">
                                Блок 5: ещё какой-то классный текст о преимуществах...
                            </div>
                        </div>
                    </div>
                    <img className="carousel__arrow arrow_right" src={require('./../images/arrow_right.svg')} alt="right arrow" />
                </div>
            </div>
        </>
    );
}

export default Main;