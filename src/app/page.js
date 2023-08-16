"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import StyledText from "./StyledText";

export default function Home() {
    const [greenStar, setGreenStar] = useState(false);
    return (
        <main className={styles.main}>
            <header className={styles.header}>
                <Image
                    className={styles.logo}
                    src="/logo.svg"
                    alt="Next.js Logo"
                    width={118}
                    height={27}
                    priority
                />{" "}
                <Image
                    className={styles.logo}
                    src="/trash.svg"
                    alt="Trash"
                    width={32}
                    height={32}
                    priority
                />
            </header>

            <section>
                <h6>Cole seu código SQL aqui</h6>
                <div
                    className={styles.lightContainer}
                >
                    <StyledText
                        text={`CREATE TABLE IF NOT EXISTS "chats" ( "id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL, "title" text, "atlas_user_id" uuid NOT NULL, "created_at" timestamp DEFAULT now() );`}
                    />
                </div>
            </section>

            <section>
                <h6>Faça uma pergunta sobre o código</h6>
                <div className={styles.lightContainer}>
                    Me liste todos os chats que possuem pelo menos 4 mensagens
                </div>
            </section>

            <button
                onMouseEnter={() => setGreenStar(true)}
                onMouseLeave={() => setGreenStar(false)}
                className={styles.button}
            >
                <div className={styles.star}>
                    {greenStar ? (
                        <Image
                            src="/star-green.svg"
                            alt="Star"
                            width={24}
                            height={24}
                            priority
                        />
                    ) : (
                        <Image
                            src="/star.svg"
                            alt="Star"
                            width={24}
                            height={24}
                            priority
                        />
                    )}
                </div>
                Perguntar à inteligência artificial
            </button>

            <section>
                <h6>Resposta</h6>
                <div className={styles.darkContainer}>
                    <StyledText
                        text={`SELECT c.id, c.title FROM chats c INNER JOIN ( SELECT
                    chat_id, COUNT(*) AS message_count FROM messages GROUP BY
                    chat_id ) m ON c.id = m.chat_id WHERE m.message_count >= 4;`}
                    />
                </div>
            </section>
        </main>
    );
}
