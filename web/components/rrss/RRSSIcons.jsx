import React from "react";
import { FaSpotify, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import Link from "next/link";
import styles from "./RRSSIcons.module.scss";

export default function RRSSIcons() {
  return (
    <div className={styles.container}>
      <Link href="https://instagram.com/enciendetupoder">
        <a target="_blank">
          <AiFillInstagram color="#a6895a" size={48} />
        </a>
      </Link>
      <Link href="https://www.facebook.com/enciendetupoder">
        <a target="_blank">
          <FaSpotify color="#a6895a" size={40} />
        </a>
      </Link>
      <Link href="https://www.facebook.com/enciendetupoder">
        <a target="_blank">
          <FaYoutube color="#a6895a" size={40} />
        </a>
      </Link>
      <Link href="https://api.whatsapp.com/send?phone=5491168640045">
        <a target="_blank">
          <IoLogoWhatsapp color="#a6895a" size={40} />
        </a>
      </Link>
      <Link href="https://api.whatsapp.com/send?phone=5491168640045">
        <a target="_blank">
          <MdEmail color="#a6895a" size={44} />
        </a>
      </Link>
    </div>
  );
}
