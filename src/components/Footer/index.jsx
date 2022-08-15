import React from "react";
import styles from "./index.module.scss";
import Logo from "components/Logo";
import H3 from "components/H3";
import PaymentSystems from "components/PaymentSystems";
import { InstagramIcons, TelegramIcon, TwitterIcon } from "icons";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.footerWrapper}>
        <div className={styles.logo}>
          <Logo />
        </div>
        <div className={styles.wrapperList}>
          <div className={styles.company}>
            <H3>О компании</H3>
            <li>Цветы м. Белорусская</li>
            <li>Цветы м. Новогиреево</li>
            <li>Цветы м. Автозаводская</li>
            <li>7 причин покупать у нас</li>
            <li>Отзывы о нас</li>
          </div>
          <div className={styles.company}>
            <H3>Каталог</H3>
            <li>Цветы срезанные</li>
            <li>Букеты и композиции</li>
            <li>Горшочные растения</li>
            <li>Сопутсвующие товары</li>
          </div>
          <div className={styles.company}>
            <H3>О нас</H3>
            <li>История</li>
            <li>Превью</li>
            <li>Деятельность</li>
            <li>Результаты сейчас</li>
          </div>
          <div className={styles.company}>
            <H3>Как оформить заказ</H3>
            <li>Как заказать букет</li>
            <li>Оплата и доставка</li>
            <li>Оптовым клиентамы</li>
          </div>
        </div>
        <div className={styles.lastBlock}>
          <div className={styles.join}>
            <H3>Присоединяйся</H3>
            <div className={styles.socialNetwort}>
              <InstagramIcons />
              <TelegramIcon />
              <TwitterIcon />
            </div>
          </div>
          <div className={styles.methodPayload}>
            <H3>Способы оплаты</H3>
            <div className={styles.bannerPayload}>
              <PaymentSystems />
            </div>
          </div>
          <div className={styles.numbers}>+7(999)999-99-99</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
