import * as React from "react";

import "../styles/Main.css";

function Main() {
    let serviceName = "сервис по поиску\n\публикаций\n\о компании\n\по его ИНН";
    let serviceInfo = "Комплексный анализ публикаций, получение данных\n\в формате PDF на электронную почту.";
    let group2Element;
    let group4Element;

    const carousel = () => {
        let arrowLeft = group2Element.querySelector('.main__group_2 .carousel__arrow.arrow_left');
        let arrowRight = group2Element.querySelector('.main__group_2 .carousel__arrow.arrow_right');
        let itemsGroup = group2Element.querySelector('.main__group_2 .tabs-collection');
        let items = group2Element.querySelectorAll('.main__group_2 .tabs-collection__item');
        let node;
        arrowLeft.onclick = () => {
            node = items[0];
            items[0].remove();
            itemsGroup.appendChild(node);
            items = group2Element.querySelectorAll('.main__group_2 .tabs-collection__item');
        }
        arrowRight.onclick = () => {
            node = items[items.length - 1];
            items[items.length - 1].remove();
            itemsGroup.insertBefore(node, items[0]);
            items = group2Element.querySelectorAll('.main__group_2 .tabs-collection__item');
        }
    }

    const tariff = () => {
        let items = group4Element.querySelectorAll('.main__group_4 .tabs-collection__item');
        items[0].onclick = () => {
            items[0].style.border = "2px solid #FFB64F";
            items[0].querySelector('.tariff__current .current').style.display = "flex";
            items[0].querySelector('button').innerHTML = "Перейти в личный кабинет";
            items[0].querySelector('button').style.backgroundColor = "#D2D2D2";
            items[0].querySelector('button').style.color = "#000000";
            items[1].style.border = "";
            items[1].querySelector('.tariff__current .current').style.display = "none";
            items[1].querySelector('button').innerHTML = "Подробнее";
            items[1].querySelector('button').style.backgroundColor = "#5970FF";
            items[1].querySelector('button').style.color = "#FFFFFF";
            items[2].style.border = "";
            items[2].querySelector('.tariff__current .current').style.display = "none";
            items[2].querySelector('button').innerHTML = "Подробнее";
            items[2].querySelector('button').style.backgroundColor = "#5970FF";
            items[2].querySelector('button').style.color = "#FFFFFF";
        }
        items[1].onclick = () => {
            items[0].style.border = "";
            items[0].querySelector('.tariff__current .current').style.display = "none";
            items[0].querySelector('button').innerHTML = "Подробнее";
            items[0].querySelector('button').style.backgroundColor = "#5970FF";
            items[0].querySelector('button').style.color = "#FFFFFF";
            items[1].style.border = "2px solid #7CE3E1";
            items[1].querySelector('.tariff__current .current').style.display = "flex";
            items[1].querySelector('button').innerHTML = "Перейти в личный кабинет";
            items[1].querySelector('button').style.backgroundColor = "#D2D2D2";
            items[1].querySelector('button').style.color = "#000000";
            items[2].style.border = "";
            items[2].querySelector('.tariff__current .current').style.display = "none";
            items[2].querySelector('button').innerHTML = "Подробнее";
            items[2].querySelector('button').style.backgroundColor = "#5970FF";
            items[2].querySelector('button').style.color = "#FFFFFF";
        }
        items[2].onclick = () => {
            items[0].style.border = "";
            items[0].querySelector('.tariff__current .current').style.display = "none";
            items[0].querySelector('button').innerHTML = "Подробнее";
            items[0].querySelector('button').style.backgroundColor = "#5970FF";
            items[0].querySelector('button').style.color = "#FFFFFF";
            items[1].style.border = "";
            items[1].querySelector('.tariff__current .current').style.display = "none";
            items[1].querySelector('button').innerHTML = "Подробнее";
            items[1].querySelector('button').style.backgroundColor = "#5970FF";
            items[1].querySelector('button').style.color = "#FFFFFF";
            items[2].style.border = "2px solid #000000";
            items[2].querySelector('.tariff__current .current').style.display = "flex";
            items[2].querySelector('button').innerHTML = "Перейти в личный кабинет";
            items[2].querySelector('button').style.backgroundColor = "#D2D2D2";
            items[2].querySelector('button').style.color = "#000000";
        }
    }

    React.useEffect(() => {
        carousel();
        tariff();
    }, []);

    return (
        <>
            <div className="main__group_1">
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
                    <button className="text_info_bold">Запросить данные</button>
                </div>
                <div className="column column--right">
                    <img src={require('./../images/main_group_1_logo.svg')} alt="main logo" />
                </div>
            </div >

            <div className="main__group_2" ref={(element) => { group2Element = element }}>
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

            <div className="main__group_3">
                <img src={require('./../images/group_3.svg')} alt="image" />
            </div>

            <div className="main__group_4" ref={(element) => { group4Element = element }}>
                <div className="group_name">наши тарифы</div>
                <div className="items">
                    <div className="tabs-collection">
                        <div className="tabs-collection__item">
                            <div className="tariff__header">
                                <div className="tariff_info">
                                    <div className="tariff_name text_info_bold">Beginner</div>
                                    <div className="tariff_description text_info">Для небольшого исследования</div>
                                </div>
                                <img className="tariff_image" src={require('./../images/Tariff_img_01.svg')} alt="tariff image" />
                            </div>
                            <div className="tariff__current">
                                <div className="current text_info">Текущий тариф</div>
                            </div>
                            <div className="tariff__price">
                                <div className="price text_info_bold">
                                    <div className="price__new">799 ₽</div>
                                    <div className="price__old">1 200 ₽</div>
                                </div>
                                <div className="price_info text_info">или 150 ₽/мес. при рассрочке на 24 мес.</div>
                            </div>
                            <div className="tariff_info">
                                <div className="tariff_info__header text_info_bold">В тариф входит:</div>
                                <div className="tariff_info__items text_info">
                                    <div className="item">
                                        <img src={require('./../images/check_mark.svg')} alt="check mark image" />
                                        <div>Безлимитная история запросов</div>
                                    </div>
                                    <div className="item">
                                        <img src={require('./../images/check_mark.svg')} alt="check mark image" />
                                        <div>Безопасная сделка</div>
                                    </div>
                                    <div className="item">
                                        <img src={require('./../images/check_mark.svg')} alt="check mark image" />
                                        <div>Поддержка 24/7</div>
                                    </div>
                                </div>
                            </div>
                            <div className="tariff__button">
                                <button className="text_info">Подробнее</button>
                            </div>
                        </div>
                        <div className="tabs-collection__item">
                            <div className="tariff__header">
                                <div className="tariff_info">
                                    <div className="tariff_name text_info_bold">Pro</div>
                                    <div className="tariff_description text_info">Для HR и фрилансеров</div>
                                </div>
                                <img className="tariff_image" src={require('./../images/Tariff_img_02.svg')} alt="tariff image" />
                            </div>
                            <div className="tariff__current">
                                <div className="current text_info">Текущий тариф</div>
                            </div>
                            <div className="tariff__price">
                                <div className="price text_info_bold">
                                    <div className="price__new">1 299 ₽</div>
                                    <div className="price__old">2 600 ₽</div>
                                </div>
                                <div className="price_info text_info">или 279 ₽/мес. при рассрочке на 24 мес.</div>
                            </div>
                            <div className="tariff_info">
                                <div className="tariff_info__header text_info_bold">В тариф входит:</div>
                                <div className="tariff_info__items text_info">
                                    <div className="item">
                                        <img src={require('./../images/check_mark.svg')} alt="check mark image" />
                                        <div>Все пункты тарифа Beginner</div>
                                    </div>
                                    <div className="item">
                                        <img src={require('./../images/check_mark.svg')} alt="check mark image" />
                                        <div>Экспорт истории</div>
                                    </div>
                                    <div className="item">
                                        <img src={require('./../images/check_mark.svg')} alt="check mark image" />
                                        <div>Рекомендации по приоритетам</div>
                                    </div>
                                </div>
                            </div>
                            <div className="tariff__button">
                                <button className="text_info">Подробнее</button>
                            </div>
                        </div>
                        <div className="tabs-collection__item">
                            <div className="tariff__header">
                                <div className="tariff_info">
                                    <div className="tariff_name text_info_bold">Business</div>
                                    <div className="tariff_description text_info">Для корпоративных клиентов</div>
                                </div>
                                <img className="tariff_image" src={require('./../images/Tariff_img_03.svg')} alt="tariff image" />
                            </div>
                            <div className="tariff__current">
                                <div className="current text_info">Текущий тариф</div>
                            </div>
                            <div className="tariff__price">
                                <div className="price text_info_bold">
                                    <div className="price__new">2 379 ₽</div>
                                    <div className="price__old">3 700 ₽</div>
                                </div>
                                <div className="price_info text_info"></div>
                            </div>
                            <div className="tariff_info">
                                <div className="tariff_info__header text_info_bold">В тариф входит:</div>
                                <div className="tariff_info__items text_info">
                                    <div className="item">
                                        <img src={require('./../images/check_mark.svg')} alt="check mark image" />
                                        <div>Все пункты тарифа Pro</div>
                                    </div>
                                    <div className="item">
                                        <img src={require('./../images/check_mark.svg')} alt="check mark image" />
                                        <div>Безлимитное количество запросов</div>
                                    </div>
                                    <div className="item">
                                        <img src={require('./../images/check_mark.svg')} alt="check mark image" />
                                        <div>Приоритетная поддержка</div>
                                    </div>
                                </div>
                            </div>
                            <div className="tariff__button">
                                <button className="text_info">Подробнее</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Main;