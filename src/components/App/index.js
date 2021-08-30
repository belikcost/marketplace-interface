import { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import Banners from "../Banners";
import Products from "../Products";
import Suppliers from "../Suppliers";
import Articles from "../Articles";

import './index.scss';



const App = ({products, suppliers, handleGetSuppliers, articles}) => {
    const {t} = useTranslation();
    const [showAll, setShowAll] = useState(false);
    const aboutUsText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad aperiam aut deleniti dolore ducimus iure minus possimus tenetur! Assumenda deserunt dolorem doloremque dolorum eos esse hic, incidunt maxime nihil nostrum officia optio rem vero. Accusamus delectus laboriosam tempore. Ab accusamus ad alias aliquam animi architecto asperiores aut, commodi, cumque dignissimos et fugit harum impedit in incidunt ipsam iure libero magni nesciunt nobis odio odit, officia possimus praesentium provident quam quo ratione repellat rerum suscipit ullam vel vero vitae. Accusantium aliquam atque consequatur consequuntur corporis deserunt distinctio dolore dolorem explicabo fugit harum iste itaque modi nulla obcaecati, perferendis perspiciatis quae qui repudiandae saepe ut voluptatem voluptates! Provident, sapiente totam! Eligendi facilis harum in magni quae quia quis quo quod? Alias, deleniti, dolorem, doloremque doloribus error et ipsam iusto laboriosam laborum possimus sit sunt. Ab adipisci aliquam at aut autem blanditiis commodi corporis cupiditate deserunt eum iste itaque iure laborum minima modi necessitatibus odio omnis optio perferendis, quasi sapiente sunt suscipit vel veritatis voluptate voluptates voluptatum. Accusamus accusantium aliquam cupiditate delectus dolores est et harum minus velit, voluptatibus! Accusantium animi culpa doloribus ea eius eligendi enim esse et ex fugiat hic illum in ipsam iure laboriosam libero maiores modi nesciunt nisi odit quasi quos, reiciendis repudiandae sit sunt tenetur unde voluptatem. Aliquid atque distinctio dolor dolorum eos, expedita molestias mollitia natus quasi quia repellat rerum sed, sequi vel vitae voluptas voluptates voluptatum! Accusamus consequatur dolores et eum odit. Amet aspernatur corporis modi quasi. Architecto cum et expedita facilis maiores nisi quae similique vel. Ab, atque blanditiis consectetur corporis cumque debitis doloribus ducimus earum ex in, maxime modi molestias nam nemo nobis nostrum numquam officiis porro possimus quis sint suscipit tempora tenetur velit veniam veritatis voluptatum. In iure neque nisi numquam totam. Accusantium architecto at beatae cum cupiditate est eveniet, facilis id illo in incidunt iusto laudantium magnam molestiae nemo odio quibusdam quidem quo, recusandae saepe sequi tempore, ullam! Esse maxime nemo ut! Accusantium, dolores, recusandae. Ab accusamus animi asperiores enim esse excepturi facere facilis harum in labore porro quod, quos rerum sapiente similique vel, voluptate! Adipisci alias aliquid dolore error id optio provident sunt veniam. Beatae dolorum incidunt minima nostrum nulla, optio reiciendis ullam? Ab asperiores error eum, minus molestiae tempora. Ad autem blanditiis, deleniti dicta ducimus earum, id ipsam ipsum iure libero, molestiae officia quidem recusandae sed vitae? Accusantium animi, eos ex excepturi exercitationem explicabo ipsa minima natus nobis nostrum omnis possimus quam ratione soluta totam vel, veritatis. A ab architecto beatae consectetur corporis culpa cumque doloremque ducimus eaque eligendi enim error eveniet excepturi fugiat fugit itaque labore laboriosam maxime modi necessitatibus neque nisi nobis obcaecati odio officiis perspiciatis placeat quae, qui quis repellat repellendus reprehenderit similique sint totam unde ut, voluptatum? Amet aspernatur autem, consectetur consequatur cupiditate dolor error eveniet expedita, magnam molestias perferendis perspiciatis porro, quaerat quam quo rerum saepe similique unde veritatis voluptatum. Amet aut blanditiis consequuntur, cum cumque dignissimos dolores ducimus est excepturi magni mollitia nam non optio quisquam, recusandae tempora, vel voluptate voluptatibus! Cum dignissimos doloremque eaque impedit ipsum laborum nam necessitatibus nisi optio placeat porro reiciendis ut veniam, veritatis voluptas voluptatibus voluptatum. Ab ad animi architecto at beatae consequatur cum cumque deserunt dolor, dolorem doloremque eius eum expedita explicabo fugiat impedit ipsa magnam modi molestiae molestias nihil non nostrum obcaecati officia pariatur possimus praesentium quam ratione saepe soluta suscipit veritatis vero voluptatibus? Ad animi at beatae consectetur corporis, delectus dicta dolor doloribus ea eius enim error eveniet explicabo, fugiat incidunt, itaque molestias mollitia perspiciatis porro quasi quia quibusdam similique sit tempora temporibus tenetur vel! Aperiam consectetur expedita maiores modi perferendis quae quod ullam vero! Atque hic magni quia quo repellat? Animi deserunt distinctio maxime nostrum odio perferendis ratione rem sint totam voluptatum? Amet architecto commodi, delectus ea maiores molestiae nobis optio quae reprehenderit vel? Amet asperiores consectetur dignissimos eum, ex itaque velit vitae voluptate! Aliquam aliquid at aut dolores eius explicabo facere fugit illo impedit ipsam obcaecati optio reiciendis sed, sint suscipit tempore ut? Alias aperiam assumenda aut culpa cum, eius eligendi eos fugit ipsam ipsum magnam molestiae nesciunt nulla numquam perferendis rem sint velit veniam. Accusamus aspernatur assumenda aut deleniti, dicta doloremque esse exercitationem incidunt ipsa itaque laboriosam nobis nulla obcaecati quae quia quo ratione sapiente sed temporibus veritatis. Eligendi error in maiores mollitia numquam odit omnis quidem repellat! Aperiam consequuntur cum delectus dolor doloremque enim fuga id in ipsa magnam molestias nisi nobis quam qui quidem, sed similique tempora tempore tenetur ullam ut vitae voluptatem. Animi at eaque, explicabo facilis fugit labore, nesciunt odit perferendis quidem repudiandae soluta voluptas. Adipisci dolorum excepturi exercitationem labore molestias nam quam recusandae. Accusantium alias aliquam asperiores culpa cumque doloribus, ducimus, eaque eum fugit impedit iste magni nobis porro quas quasi quia sapiente vel velit. Accusamus amet beatae consequatur dolore enim esse illum numquam optio quia, reiciendis tenetur veritatis voluptate voluptates. Ab aliquam architecto, cumque cupiditate esse harum incidunt modi quam quibusdam quos reprehenderit sunt tenetur totam ullam voluptatum. Assumenda at cumque debitis dicta et, ex excepturi explicabo id incidunt laudantium magni maxime neque nesciunt placeat quaerat quia quisquam reprehenderit repudiandae sequi vitae. Amet doloremque ducimus placeat suscipit! Accusamus ad asperiores aut autem distinctio dolore dolorem, ducimus id iste molestiae neque, nobis numquam perferendis quis quo vitae voluptatum. Dignissimos eos eum explicabo fugiat hic illum possimus quo repellat repellendus vitae. Asperiores dolorum impedit laudantium obcaecati quidem! Aliquam assumenda beatae cupiditate eum fuga, hic impedit, laborum maiores, minima nam nihil nostrum possimus praesentium provident quia quis quod reiciendis sed totam ut. A aut beatae dicta earum esse, explicabo fugit hic maxime quaerat qui! Accusamus earum pariatur veritatis. Alias aliquid commodi ea in ipsum, iste laborum minus mollitia odit quibusdam, repellendus sapiente unde vel, velit veritatis? Accusamus aliquid amet assumenda consequuntur corporis culpa delectus deserunt, dicta ipsa, labore laboriosam laborum laudantium necessitatibus omnis, pariatur perspiciatis quasi quia quibusdam quos ratione repellat sed soluta ullam vero vitae voluptate voluptates. Animi assumenda consequuntur dolores ducimus exercitationem ipsum laboriosam laborum, magnam, magni molestiae non, nulla perferendis quibusdam rem temporibus? Alias deleniti fuga recusandae?'

    return (
        <>
            <Banners/>
            <div className="container">
                <div className="homepage">
                    <section>
                        <h1>{t('hurryUp')}</h1>
                        <Products products={products}/>
                        <Link to="/articles" className="homepage_link">
                            {t('allProducts')}
                        </Link>
                    </section>
                    <section>
                        <h1>{t('ourShops')}</h1>
                        <Suppliers suppliers={suppliers} handleGetSuppliers={handleGetSuppliers}/>
                        <Link to="/articles" className="homepage_link">
                            {t('allShops')}
                        </Link>
                    </section>
                    <section>
                        <h1>{t('ourArticles')}</h1>
                        <Articles articles={articles}/>
                        <Link to="/articles" className="homepage_link">
                            {t('allArticles')}
                        </Link>
                    </section>
                    <section>
                        <h1>{t('aboutUs')}</h1>
                        <p>{showAll ? aboutUsText : `${aboutUsText.substr(0, 200)}...`}</p>
                        <b onClick={() => setShowAll(!showAll)}>
                            {showAll ? (t('hideAll')) : (t('showAll'))}
                        </b>
                    </section>
                </div>
            </div>
        </>
    );
};

export default App;