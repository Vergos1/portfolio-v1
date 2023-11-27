import style from './AboutMe.module.scss';
import MyImage from '@/assets/png/photo.png';
import Button from '@/components/UI/Button/Button.jsx';

const AboutMe = () => {
  return (
    <div className={`${style.wrapper} item-dark`}>
      <div className={style.innerTop}>
        <div className={style.itemsImage}>
          <h5 className={style.nameTitle}>
            Ігор, Frontend <br /> Developer
          </h5>
          <img className={style.image} src={MyImage} alt="my photo" />
        </div>
        <div className={style.itemsDesc}>
          <div className={style.itemDesc}>
            <h6 className={style.descriptionTitle}>
              Ласкаво прошу в світ фронтенд розробки
            </h6>
            <p className={style.descriptionTopSecondary}>
              Де технічна майстерність зустрічається з творчістю. Моє ім`я Ігор,
              і я є професійним фронтенд розробником із Вінниці. Я маю понад рік
              комерційного досвіду в реалізації проектів різної складності.
              Фронтенд для мене - не просто робота, а можливість постійно
              вдосконалюватись та вносити свіжі ідеї в кожен проект.
            </p>
          </div>
          <div className={style.itemDesc}>
            <h6 className={style.descriptionTitle}>
              Працюючи на стику технологій та креативу
            </h6>
            <p className={style.descriptionTopSecondary}>
              Я використовую передові практики та інструменти для створення
              адаптивних, швидких та безпечних сайтів Я спеціалізуюся на
              створенні зручних та красивих веб-інтерфейсів, які забезпечують
              відмінний користувацький досвід та позитивно впливають на бізнес
              моїх клієнтів. Завдяки високому рівню знань в HTML, CSS,
              JavaScript, та сучасних фреймворках, як-от React.js, я здатен
              вирішувати складні задачі та реалізовувати вимоги клієнтів з
              високою точністю.
            </p>
          </div>
          <div className={style.itemDesc}>
            <h6 className={style.descriptionTitle}>Моя праця</h6>
            <p className={style.descriptionTopSecondary}>
              Відзначена не тільки надійністю та продуктивністю, але й
              ініціативністю - я не боюся викликів та готовий взятися за
              найсміливіші ідеї. Я пропоную не просто розробку, а партнерство,
              де кожен проект стає справжнім подорожжю від концепції до запуску
            </p>
          </div>
        </div>
      </div>
      <div className={style.innerBottom}>
        <div className={style.itemsDesc}>
          <p className={style.descriptionWhite}>
            Також я шукаю можливість приєднатися до команди, Де мої технічні
            навички та творчий підхід до розробки будуть внести вклад у розвиток
            компанії Мотивація досягати нових висот і вдосконалювати кожен
            аспект моєї роботи, від відповідальності до інновацій, робить мене
            надійним партнером для розвитку вашого бізнесу.
          </p>
          <p className={style.descriptionSecondary}>
            Я відкритий до нових проектів та співпраці. Не вагайтеся звертатись,
            щоб обговорити, як ми можемо разом створити веб-сайт, який не тільки
            відповідає сучасним тенденціям, але й виражає унікальність вашої
            марки. Співпраця зі мною гарантує, що ваша візія буде реалізована з
            найвищими стандартами якості та увагою до деталей.
          </p>
        </div>
        <div className={style.itemsButton}>
          <Button
            wautoMobile={true}
            isLinkBack={true}
            styleVariant="noFilled"
            size="m"
          >
            назад
          </Button>
          <div className={style.itemButton}>
            <Button
              wautoMobile={true}
              isLink={true}
              url="https://github.com/Vergos1"
              styleVariant="noFilled"
              size="m"
            >
              git
            </Button>
            <Button
              wautoMobile={true}
              isLink={true}
              url="https://www.linkedin.com/in/ihor-yanchuk-248a64268"
              styleVariant="noFilled"
              size="m"
            >
              linkedin
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
