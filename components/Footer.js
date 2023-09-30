import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="m-2 w-[470px] md:w-[700px] lg:w-[900px]">
        <ul>
          <li>1. Apple Fitness+ is coming late 2020.</li>
          <li>
            2. The Apple One free trial includes only services that you are not
            currently using through a free trial or a subscription. Plan
            automatically renews after trial until cancelled. Restrictions and
            other terms apply.
          </li>
          <li>
            iPhone 12 mini and iPhone 12 Pro Max have not been authorized as
            required by the rules of the Federal Communications Commission.
            iPhone 12 mini and iPhone 12 Pro Max are not, and may not be,
            offered for sale or lease, or sold or leased, until authorization is
            obtained.
          </li>
          <li>
            To access and use all the features of Apple Card, you must add Apple
            Card to Wallet on an iPhone or iPad with iOS 12.4 or later or
            iPadOS. To manage Apple Card Monthly Installments, you need an
            iPhone with iOS 13.2 or later or an iPad with iPadOS 13.2 or later.
            Update to the latest version of iOS or iPadOS by going to Settings
            General Software Update. Tap Download and Install.
          </li>
          <li>Available for qualifying applicants in the United States.</li>
          <li>
            Apple Card is issued by Goldman Sachs Bank USA, Salt Lake City
            Branch.
          </li>
          <li>
            Apple TV+ is $4.99/month after free trial. One subscription per
            Family Sharing group. Offer good for 3 months after eligible device
            activation. Plan automatically renews until cancelled. Restrictions
            and other terms apply.
          </li>
        </ul>

        <div class="footer__links">
          <div class="footer__links--column">
            <div class="footer__links--column-title">Shop and Learn</div>
            <a href="/Laptops">Laptops</a>
            <a href="/SmartPhones">SmartPhones</a>
            <a href="/Tablets">Tablets</a>
            <a href="/SmartWatch">SmartWatch</a>
            <a href="/Sound">SoundDevices</a>
            <a href="/FlashDisk">Flashdisks</a>
            <a href="/PowerBank">PowerBanks</a>
          </div>

          <div class="footer__links--column">
            <div class="footer__links--column-title">Apple Store</div>
            <a href="">Find a Store</a>
          </div>
        </div>

        <div class="footer__more">
          More ways to shop: <a href="">Find an Apple Store</a> or
          <a href="">other retailer</a> near you. Or call 1-800-MY-APPLE.
        </div>

        <div class="footer__copyright">
          <p>Copyright © 2023 Apple Inc. All rights reserved.</p>
          <a href="">Algeria</a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
