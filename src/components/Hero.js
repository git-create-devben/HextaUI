import Link from "next/link";

import { useEffect, useRef } from "react";
import gsap from "gsap";

import { TextRevealV1Preview } from "@/pages/docs/components/text-reveal-v1";
import { Reviews } from "./Reviews";
import { WaterDropGridPreview } from "@/pages/docs/components/water-drop-effect";
import PricingCards from "./PricingCards";
import { InfiniteScrollingTextV1Preview } from "@/pages/docs/components/infinite-text-scroll-v1";

export const Hero = () => {
  const whiteRayRef = useRef(null);

  useEffect(() => {
    gsap.to(whiteRayRef.current, {
      transform: "translateY(0) rotate(-70deg)",
      delay: 1,
      duration: 2,
      ease: "circ.out",
    });
  }, []);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-5 pt-[15rem] pb-56 overflow-x-hidden text-center px-7 hero step1 max-sm:py-40 relative">
        <div className="absolute top-[1.8rem] right-[-1.8rem] opacity-65 max-[891px]:right-[-10rem] max-[750px]:hidden">
          <WaterDropGridPreview width={25} height={10} />
        </div>
        <div
          className="absolute w-20 -rotate-45 opacity-45 left-16 blur-4xl white-ray"
          ref={whiteRayRef}
          style={{
            height: "40rem",
            top: "-4rem",
            transform: "rotate(-70deg) translateY(-30rem)",
            background: "white",
          }}
        ></div>
        <div className="relative hero-content">
          <h1 className="max-w-6xl font-extrabold tracking-tighter leading-tighter text-8xl bricolage-fonts max-[1163px]:text-7xl max-[1163px]:max-w-4xl max-[590px]:text-6xl max-[500px]:text-5xl z-[9999]">
            Gorgeous Web Components, Zero Effort
          </h1>
          <p className="z-[9999] max-w-2xl py-4 mx-auto leading-5 text-md opacity-70">
            Elevate your projects with stunning, modern components. Simply copy
            and paste these responsive, beautiful elements for instant
            awesomeness.
          </p>
        </div>{" "}
        <div className="text-neutral-500 flex-shrink-0 stroke-1 flex gap-5 flex-wrap justify-center mb-[15px] z-[9]">
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              className="flex-shrink-0 stroke-1 text-neutral-500"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                d="m4.5 4.5l.405-.293A.5.5 0 0 0 4 4.5zm3 9.5A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0-1A7.5 7.5 0 0 0 0 7.5h1A6.5 6.5 0 0 1 7.5 1zM5 12V4.5H4V12zm-.905-7.207l6.5 9l.81-.586l-6.5-9zM10 4v6h1V4z"
              />
            </svg>
            Next.js
          </div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 15 15"
            >
              <g fill="none" stroke="currentColor">
                <path d="M14.5 7.584c0 1.657-3.134 3-7 3s-7-1.343-7-3s3.134-3 7-3s7 1.343 7 3Z" />
                <path d="M4.166 13.739c1.457.79 4.13-1.327 5.972-4.726c1.841-3.4 2.153-6.795.696-7.584c-1.457-.79-4.13 1.327-5.972 4.726c-1.841 3.4-2.153 6.795-.696 7.584Z" />
                <path d="M10.834 13.739c-1.457.79-4.13-1.327-5.972-4.726c-1.841-3.4-2.153-6.795-.696-7.584c1.457-.79 4.13 1.327 5.972 4.726c1.841 3.4 2.153 6.795.696 7.584Z" />
                <path d="M6.5 7.584a1 1 0 1 0 2 0a1 1 0 0 0-2 0Z" />
              </g>
            </svg>
            React
          </div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              className="flex-shrink-0 stroke-1 t2xt-neutral-500"
              height="25"
              viewBox="0 0 15 15"
            >
              <path
                fill="currentColor"
                d="M7.5 2.5c-1.026 0-1.908.277-2.6.87c-.688.59-1.137 1.447-1.387 2.516a.5.5 0 0 0 .897.4c.316-.452.632-.723.936-.863c.294-.135.611-.162.975-.065c.366.098.65.386 1.095.87l.015.016c.336.365.745.81 1.305 1.156c.582.359 1.305.6 2.264.6c1.026 0 1.908-.277 2.6-.87c.688-.59 1.138-1.447 1.387-2.516a.5.5 0 0 0-.897-.4c-.316.452-.632.723-.936.863c-.294.135-.611.162-.975.065c-.366-.098-.65-.386-1.095-.87l-.015-.016c-.336-.365-.745-.81-1.305-1.156c-.582-.359-1.305-.6-2.264-.6M4 7c-1.026 0-1.908.277-2.6.87C.712 8.46.263 9.317.013 10.386a.5.5 0 0 0 .897.4c.316-.452.632-.723.936-.863c.294-.135.611-.162.975-.065c.366.098.65.386 1.095.87l.015.016c.336.365.745.81 1.305 1.156c.582.359 1.305.6 2.264.6c1.026 0 1.908-.277 2.6-.87c.688-.59 1.138-1.447 1.387-2.516a.5.5 0 0 0-.897-.4c-.316.452-.632.723-.936.863c-.294.135-.611.162-.975.065c-.366-.098-.65-.386-1.095-.87l-.015-.016c-.335-.365-.745-.81-1.305-1.156C5.682 7.24 4.959 7 4 7"
              />
            </svg>
            Tailwind CSS
          </div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="flex-shrink-0 stroke-1 text-neutral-500"
            >
              <path d="M12 12l-8 -8v16l16 -16v16l-4 -4"></path>
              <path d="M20 12l-8 8l-4 -4"></path>
            </svg>
            Framer Motion
          </div>
          <div className="flex gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 32 32"
            >
              <path
                fill="currentColor"
                d="M17.964 31.932c-.417-.073-.849-.271-1.094-.49a.964.964 0 0 1-.266-.646c0-.245.125-.589.323-.932c.12-.193.214-.401.281-.62c.042-.151.13-.396.198-.552l.12-.286l.031-1.911c.016-1.057.047-2.036.073-2.188c.068-.438.182-.865.333-1.281l.115-.276l-.167-.099c-.151-.094-.276-.224-.771-.813c-.609-.719-1.411-1.115-2.547-1.25c-.37-.036-.745-.063-1.12-.078c-1.667-.078-2.62-.427-3.479-1.271c-.641-.63-.974-1.365-1.109-2.448c-.182-1.464-.385-2.214-.76-2.823a2.793 2.793 0 0 0-.318-.422l-.151-.151l-.333.214c-.182.12-.438.271-.563.339c-.417.229-.813.484-1.193.76c-.932.677-1.948 1.526-2.505 2.083c-.25.25-.38.359-.438.349c-.38-.057-.089-1.703.531-2.943c.792-1.599 2.125-3.073 3.667-4.068c1.266-.818 3.313-1.943 4.26-2.339c1.682-.703 3.859-1.464 5.349-1.87c.313-.089.505-.167.635-.255c.292-.203.578-.302.906-.307c.276-.005.302-.01.568-.188c.313-.203.406-.214.719-.104l.203.073l.25-.172l.25-.167l.359.005c.276.005.401-.005.521-.057c.151-.068.156-.078.198-.328c.094-.542.104-.813.047-1.141c-.073-.432-.083-2.109-.01-2.438c.078-.354.13-.427.396-.557c.396-.193.693-.25 1.375-.25c.833 0 1.255.115 1.568.417c.281.271.328.906.182 2.396c-.089.859-.099 1.099-.073 1.661c.01.359.036.698.047.745c.021.089.042.094.344.099c.297.005.349.021.63.167c.271.141.474.313.516.438c.005.026.052.026.135 0c.161-.047.302.005.417.146c.068.089.109.104.266.104c.214 0 .292.052.469.313a.78.78 0 0 0 .328.266c.292.146.688.552.839.875c.234.479.281 1.036.135 1.536c-.052.188-.052.193.057.375c.229.391.313.87.219 1.276l-.052.24l.156.156c.776.776.661 2.042-.286 3.172a2.01 2.01 0 0 0-.266.422c-.182.484-.391.823-.661 1.104l-.276.281h-.281c-.281 0-.677-.094-.917-.219c-.099-.052-.104-.052-.083.01c.063.229.219 1.161.271 1.677c.083.792.057 1.943-.052 2.438a3.805 3.805 0 0 1-.396 1.047c-.104.167-.109.203-.089.406c.031.286-.036.766-.151 1.083c-.141.37-.193.542-.224.729c-.026.161-.026.161.089.161c.151 0 .234.089.234.266c0 .078-.068.5-.151.932c-.229 1.214-.245 1.349-.245 2.526c-.005 1.214-.005 1.203.271 1.385l.62.401a8.616 8.616 0 0 0 1.703.875c.87.344.99.432.99.724c0 .13-.026.177-.135.281c-.333.323-.99.396-2.313.255a22.717 22.717 0 0 0-2.068-.099c-1.823-.026-2.089-.089-2.328-.542c-.135-.26-.109-.599.078-1.156c.083-.245.156-.495.219-.75c.125-.604.042-1.323-.25-2.135l-.25-.693c-.245-.703-.38-1.99-.234-2.281c.026-.057.073-.068.198-.063l.156.016l.13-.271c.099-.214.208-.354.505-.651l.38-.38l-.021-.245c-.016-.234-.323-1.37-.365-1.365c-.016 0-.099.115-.193.26c-.229.344-.734.875-1.021 1.068c-.125.083-.229.182-.229.214c-.005.141-.125.417-.271.609c-.141.188-.151.219-.13.385c.036.245-.042 1.031-.135 1.443a4.67 4.67 0 0 1-.344.885c-.359.745-.63 1.411-.698 1.719a7.563 7.563 0 0 0-.094.896c-.016.354-.052.698-.078.771c-.036.099-.036.177-.005.328c.026.109.042.354.036.547c-.005.266.016.438.094.75c.135.531.161.865.099 1.063c-.042.125-.083.172-.224.24c-.313.161-1.198.25-1.677.167zm1.265-.427c.182-.052.339-.208.339-.349c0-.063-.052-.245-.115-.406c-.125-.307-.339-1.12-.339-1.255c0-.068.005-.073.109-.016l.115.063v-.146a2.08 2.08 0 0 0-.089-.396c-.099-.297-.109-.302-.74-.339l-.427-.021l-.156.151a1.581 1.581 0 0 0-.224.292c-.068.135-.094.339-.052.385c.01.016.115 0 .229-.026a.897.897 0 0 1 .208-.036c0 .005-.115.099-.26.198c-.625.469-.844.755-.844 1.12c0 .38.359.677.922.766c.385.057 1.135.073 1.323.016zm8.474-.62c.156-.188.135-.38-.063-.599c-.115-.115-.245-.214-.391-.292s-.292-.167-.438-.26a11.063 11.063 0 0 0-.813-.479c-.24-.13-.474-.266-.703-.411l-.094-.073v-1.432c0-1.411-.005-1.432-.078-1.411c-.365.099-.969.146-1.734.13l-.828-.01l.12.292c.224.552.339 1.292.339 2.141c0 .318-.021.432-.099.656c-.042.109-.078.219-.115.328c-.016.047.042.083.255.146c.156.047.385.094.516.109l.24.026l-.026.24c-.026.271.005.557.073.646c.042.052.198.073.922.104c.547.026 1.141.083 1.609.151c.406.063.844.115.974.115c.219.005.24-.005.333-.115zm-8.338-2.437c.021-.016.052-.297.063-.63c.042-.932.078-1.068.547-2.12c.385-.859.589-1.661.573-2.229l-.01-.339l-.146.141c-.302.302-.094-.172.266-.594c.271-.323.365-.5.406-.786c.021-.115.063-.172.24-.307a4.481 4.481 0 0 0 1.474-1.948c.073-.188.26-.828.417-1.422c.292-1.099.448-1.573.589-1.776c.052-.078.073-.094.063-.042a7.41 7.41 0 0 0-.177.849c-.042.255-.12.755-.172 1.104c-.099.714-.203 1.172-.344 1.526l-.094.24l.25.646c.26.661.38 1.141.401 1.604l.016.26l-.203.042a1.051 1.051 0 0 0-.667.417c-.177.255-.276.464-.229.51c.021.021.276.068.568.104c.453.052.625.052 1.224.016c.26-.01.516-.036.771-.073c.057-.021.115-.135.208-.432c.214-.682.255-.922.229-1.401l-.021-.422l.109-.141c.255-.323.453-.906.536-1.589c.099-.833-.083-2.578-.422-4.078c-.161-.714-.229-1.141-.229-1.453v-.276l-.255.026c-.917.099-2.026.073-2.703-.068c-.37-.073-1.302-.349-1.505-.438l-.161-.073l-.021.182c-.016.099-.031.198-.052.302c-.031.109-.021.135.172.323c.24.245.313.37.313.536c0 .104-.057.188-.349.49a4.367 4.367 0 0 1-.693.599l-.339.229l-.146.505c-.521 1.849-.62 3.531-.276 4.734l.083.302l-.167.208c-.625.786-.995 1.385-1.052 1.719a8.22 8.22 0 0 1-.115.49c-.135.516-.24 1.271-.286 2.089a54.34 54.34 0 0 1-.135 2.052l-.026.203l.26.078c.146.047.365.099.49.12c.234.036.667.026.734-.01zm5.057-2.865c.406-.026.776-.089.849-.151c.031-.021.068-.13.078-.24l.026-.198l-.323.073c-.255.052-.51.083-.766.104c-.615.026-1.234.01-1.844-.052c-.203-.031-.203-.031-.141.234c.052.198.063.208.594.245c.354.031.849.026 1.526-.016zm-.339-.906c.531-.047 1.193-.161 1.323-.229c.042-.021.078-.099.094-.188l.047-.276l.026-.13l-.13.026c-.578.12-1.016.156-1.891.156c-.854 0-.953-.005-1.177-.083a.82.82 0 0 0-.271-.063c-.036.021-.042.318-.01.526c.021.125.042.146.167.182c.396.109 1.063.135 1.823.073zm-9.666-4.698c1.333-.385 3.078-1.516 4.505-2.932c.464-.464.521-.526.583-.734l.083-.266c.01-.021-.073-.057-.182-.083c-.286-.068-.505-.234-.505-.385c0-.089-.052-.177-.203-.339c-.245-.276-.307-.396-.333-.661l-.021-.214l-.292-.208c-.167-.12-.75-.443-1.37-.755a18.569 18.569 0 0 1-1.385-.75c-.521-.349-.87-.766-1.068-1.26c-.036-.099-.083-.182-.099-.182c-.042 0-1.214 1.13-1.714 1.661c-1.234 1.302-2.083 2.432-2.62 3.479c-.135.26-.281.568-.323.682l-.078.208l.094.349c.057.188.177.495.271.677c.328.646.719 1.036 1.365 1.354c.693.344 1.307.464 2.333.448c.552-.005.714-.021.958-.094zM3.896 15.411c.875-.776 2.083-1.625 3.563-2.505c.969-.578 4.714-2.453 6.438-3.219c.313-.141.594-.271.625-.286c.031-.021.12-.245.203-.495c.365-1.156.547-1.385 1.208-1.536c.083-.021.104-.047.104-.13c0-.151.104-.5.193-.656c.068-.12.068-.125.01-.109c-.036.01-.255.073-.484.141c-3.177.917-5.953 2.135-8.349 3.656c-2.557 1.625-4.031 3.573-4.458 5.906l-.031.172l.313-.307c.167-.172.469-.453.667-.625zm23.568.443c.255-.13.651-.729.797-1.203c.042-.167.125-.323.245-.453c.385-.427.703-1.203.708-1.734c0-.828-.469-1.146-1.151-.792c-.089.042-.161.073-.172.063c-.036-.036.156-.224.391-.37c.307-.203.365-.323.365-.755a1.69 1.69 0 0 0-.297-.979c-.094-.141-.13-.234-.115-.292l.094-.349c.13-.464.083-.995-.12-1.333c-.302-.51-.672-.76-1.188-.802l-.302-.021l.177.198c.526.568.781 1.281.677 1.891c-.052.313-.099.375-.401.495l-.177.073l.021.24c.036.391-.031.677-.281 1.203c-.125.266-.219.505-.208.531c.031.089.375.255.646.323l.266.063l-.167.057c-.219.068-.266.167-.266.526c0 .328.047.464.286.823c.109.156.182.318.193.411c.021.146.016.156-.104.198a1.891 1.891 0 0 1-.417.068c-.49.031-.526.047-.745.255c-.198.188-.203.198-.203.406c0 .286.109.865.177.943c.089.094.583.339.776.375a.706.706 0 0 0 .495-.057zm-7.214-.39c.318-.25.568-.5.708-.714c.089-.13.094-.156.052-.266c-.073-.167-.552-.599-.818-.729a2.08 2.08 0 0 0-.557-.161l-.328-.042l-.203-.255c-.422-.521-.656-.927-.99-1.714c-.292-.667-.547-1.057-.953-1.443c-.167-.156-.286-.286-.276-.286c.021 0 .219.099.448.219c.38.203.427.219.599.193c.62-.073 1.167-.786 1.365-1.786c.057-.281.172-.568.292-.74c.005-.005.245.151.526.354c.714.505.87.583 1.276.599c.266.01.417-.01.896-.125c1.021-.25 2.125-.349 2.797-.26c.38.052.927.219 1.333.411c.401.188.479.198.609.083c.109-.094.109-.109.109-.458c-.005-.516-.193-1.073-.479-1.406c-.146-.172-.557-.453-.964-.667a28.154 28.154 0 0 1-.432-.234c-.193-.115-.411-.099-1.005.057c-.688.177-.87.177-1.656-.026c-.667-.167-.708-.172-1.365-.068c-.349.052-1.224.021-1.516-.057c-.146-.042-.292-.083-.432-.135c-.255-.099-.698-.115-1.099-.042c-.797.141-1.401.573-1.62 1.161c-.115.297-.099.438.052.531c.24.151.557.563.557.724c0 .01-.078-.057-.167-.151c-.224-.234-.427-.339-.667-.339a.834.834 0 0 0-.734.484a4.98 4.98 0 0 0-.177.563c-.146.531-.276.813-.552 1.188c-.245.339-.281.49-.193.87c.219.958.599 1.344 2.187 2.245c.833.474 1.26.74 1.573.974c.24.177.245.188.224.323c-.047.313.151.651.542.927c.099.068.161.141.161.193c0 .094.266.224.458.224c.109 0 .193-.047.417-.219zm6.422-1.756c.604.021.635-.026.313-.401c-.339-.391-.432-.708-.307-1.057l.052-.135l-.214-.104c-.073-.036-.146-.073-.219-.099c-.036.141-.073.276-.104.417c-.078.318-.172 1.141-.177 1.49c0 .031.052.021.141-.036c.125-.073.188-.083.516-.073zm-2.026-.031c.365-.021.74-.047.839-.063l.182-.026l.021-.599c.031-.854.156-1.359.526-2.167c.26-.573.375-1.073.318-1.448c-.021-.161-.031-.172-.25-.266a5.765 5.765 0 0 0-1.245-.339c-.411-.057-1.62-.026-2.073.063c-.188.031-.531.104-.76.161c-.568.13-.87.115-1.302-.073c-.427-.188-.698-.359-.953-.599c-.203-.188-.224-.198-.276-.135c-.042.047-.063.188-.078.49c-.016.464-.089.708-.292 1.036a1.266 1.266 0 0 0-.115.214c0 .016.156.198.349.396c.667.693.995.87 1.521.833c.172-.016.292-.01.292.01c0 .042-.339.307-.479.38c-.068.036-.083.073-.073.151l.083.547c.047.313.083.458.13.5c.125.104.771.438 1.177.604c.531.214.823.292 1.229.328c.5.042.51.042 1.229 0zm-4.307-.573c.01-.016-.026-.318-.094-.667c-.083-.474-.13-.646-.182-.693c-.036-.031-.229-.167-.422-.307a6.579 6.579 0 0 1-.719-.599l-.359-.354l-.193.099l-.203.109a.93.93 0 0 0 .083.234c.057.125.172.432.255.682c.219.651.391.964.823 1.531l.161.214l.307.047c.172.026.344.063.391.078c.073.031.083.016.104-.151c.01-.073.026-.151.047-.224zm6.599-6.479c.266-.026.313-.063.198-.182c-.073-.073-.24-.078-.375-.016c-.089.042-.109.031-.25-.12c-.146-.161-.156-.167-.339-.146c-.167.021-.193.016-.214-.052a1.342 1.342 0 0 0-.24-.302a1.156 1.156 0 0 0-.432-.307c-.323-.125-.505-.109-.813.063c-.891.484-.854.479-1.714.26c-.802-.203-1.401-.411-1.594-.542c-.161-.109-.505-.229-.792-.266c-.214-.031-.349.016-.552.182l-.109.089l.099.172c.135.24.12.255-.083.078c-.219-.182-.479-.307-.646-.313c-.12 0-.474.156-.516.224c-.016.021.094.047.24.057c.151.016.359.068.5.125c.365.156.552.208.885.24c.365.036 1.026-.005 1.104-.068c.042-.036.156-.042.396-.021c.318.021.448.052 1.203.255c.438.12.745.109 1.266-.031c.24-.068.542-.135.667-.151c.214-.021.255-.01.589.141c.531.24.813.391.969.531c.156.135.177.135.552.104zm-2.969-.911l.318-.167l-.01-.323c-.005-.224-.016-.443-.026-.661l-.026-.333l-.318.245c-.188.146-.37.255-.448.271c-.229.042-1.359 0-1.464-.057a3.056 3.056 0 0 1-.391-.344l-.292-.297l-.005.177c0 .094-.01.255-.031.354c-.026.188-.026.193.177.448c.109.141.198.266.198.281c0 .099 1.505.568 1.844.573c.109 0 .245-.047.474-.167m-.604-1.183c.375-.073.557-.344.698-1.031c.146-.74.219-1.901.151-2.396c-.063-.448-.563-.646-1.516-.615c-.594.021-.839.078-1.042.25c-.125.104-.125.115-.182.609c-.104.948.052 2.297.323 2.802c.13.245.245.333.484.375c.271.047.849.047 1.083.005z"
              />
            </svg>
            GSAP
          </div>
        </div>
        <div className="flex flex-wrap gap-2 hero-buttons z-[9]">
          <Link href="/components" className="primary-button grow">
            Browse Components
          </Link>
          <Link href="/" className="secondary-button grow">
            Pricing
          </Link>
        </div>
        <div>
          <TextRevealV1Preview />
        </div>
        <div className="mt-[1rem]">
          <h3 className="text-4xl font-bold tracking-tighter">
            Our Wall of Love
          </h3>
          <Reviews />
        </div>
        <div className="mt-[7rem]">
          <h3 className="mb-[-2rem] text-4xl font-bold tracking-tighter">
            Ready to work together?
          </h3>
          <PricingCards />
        </div>
        <InfiniteScrollingTextV1Preview />
      </div>
    </>
  );
};
