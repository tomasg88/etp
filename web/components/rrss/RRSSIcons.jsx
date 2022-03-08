import React from "react";
import { FaFacebookSquare, FaInstagram, FaWhatsapp } from "react-icons/fa";
import Link from "next/link";
import styles from "./RRSSIcons.module.scss";

export default function RRSSIcons() {
  return (
    <div className={styles.container}>
      <Link href="https://www.facebook.com/enciendetupoder">
        <a target="_blank">
          <FaFacebookSquare color="#a6895a" size={40} />
        </a>
      </Link>
      <Link href="https://api.whatsapp.com/send?phone=5491168640045">
        <a target="_blank">
          <FaWhatsapp color="#a6895a" size={40} />
        </a>
      </Link>
      <Link href="https://instagram.com/enciendetupoder">
        <a target="_blank">
          <FaInstagram color="#a6895a" size={40} />
        </a>
      </Link>
    </div>
  );
}
