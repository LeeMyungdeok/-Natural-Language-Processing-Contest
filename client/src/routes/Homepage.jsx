import styles from "../styles/Homepage.module.css";
import Header from "../common/Header";
import SearchBar from "../components/SearchBar";
import BookButton from "../components/BookButton";
import Footer from "../common/Footer";
import Book from "../components/Book";

import section3 from "../assets/section3.jpg";
import crown from "../assets/crown.svg";

const dummyData = [
    { rank: 1, title: "수능영어 1" },
    { rank: 2, title: "수능영어 2" },
    { rank: 3, title: "수능영어 3" },
    { rank: 4, title: "수능영어 4" },
    { rank: 5, title: "수능영어 5" },
];

function Homepage() {
    return (
        <div className={styles.homepageContainer}>
            <Header />
            <section className={styles.homepageFirstSection}>
                <div className={styles.FirstSection}>
                    <div className={styles.FirstSectionTitle}>
                        문제 풀이의 시작, <br />
                        여기에서! 지금 검색해보세요.
                    </div>
                    <SearchBar />
                </div>
                <div className={styles.FirstSectionContent}>
                    <div className={styles.FirstSectionBookrank}>
                        {dummyData.map((data) => (
                            <Book key={data.rank} rank={data.rank} title={data.title} />
                        ))}
                    </div>
                    <div className={styles.Topfive}>
                        <img 
                            src={crown}
                            alt="crown"
                            className={styles.crown}
                        />
                        <p> 실시간 검색 순위</p>
                    </div>
                </div>
            </section>

            <section className={styles.homepageSecondSection}>
                <div>
                    <BookButton />
                </div>
            </section>
            <section>
                <div>
                    <img
                        src={section3}
                        alt="section3"
                        className={styles.section3img}
                    />
                </div>
            </section>
            <section className={styles.section4Container}>
                <div className={styles.section4imgContainer}>
                    우리의 플랫폼은 기술과 교육이 만나<br />
                    창의적인 학습 경험을 제공하여, <br />
                    모든 사용자가 자신의 잠재력을 최대한 발휘할 수 있도록 지원합니다.
                </div>
            </section>
            <Footer />
        </div>
    );
}

export default Homepage;
