import Image from "next/image";
import Link from "next/link";

import PageWrapper from "@/_lib/utils/page-wrapper";
import ButtonLink from "@/_components/ui/buttons/button-link";

const agents = [
  {
    name: "Ian Carr",
    image: "/images/contact/Ian-Carr.png",
    phone: "+27 83 645 3669",
    email: "ian@choicenet.co.za",
  },
  {
    name: "Deon De Swardt",
    image: "/images/contact/Deon-De-Swardt.png",
    phone: "+27 82 882 0625",
    email: "deon@choicenet.co.za",
  },
];

export default function ContactComponent() {
  return (
    <div
      id="contact"
      className="bg-dark-blue scroll-mt-[81px] min-[1000px]:scroll-mt-[93px]"
    >
      <PageWrapper cssClasses="flex flex-col gap-10 py-15">
        <div className="flex flex-col gap-7">
          <h2 className="text-gold">Contact</h2>
          <p className="text-[20px] text-gold">
            Viewing Strictly by Appointment
          </p>
          <p className="text-[20px] text-gold opacity-95">
            For further information contact us with any questions, to receive
            additional detail or to arrange to view
          </p>
          <div className="flex flex-col gap-7 desktop:flex-row">
            <ButtonLink cssClasses="w-full desktop:w-auto">Video</ButtonLink>
            <ButtonLink cssClasses="w-full desktop:w-auto">Contact</ButtonLink>
          </div>
        </div>
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-10 desktop:flex-row">
            {agents.map(({ name, image, phone, email }) => (
              <div
                key={name}
                className="flex items-center gap-7 desktop:w-[396px]"
              >
                <Image
                  src={image}
                  alt={name}
                  width={100}
                  height={100}
                  className="size-[100px] shrink-0 rounded-full object-cover"
                />
                <div className="flex flex-col gap-3">
                  <p className="font-semibold text-gold">{name}</p>
                  <div className="flex flex-col gap-1">
                    <Link
                      href={`tel:${phone.replace(/\s/g, "")}`}
                      className="-m-2 p-2 desktop:m-0 desktop:p-0 text-paragraph text-gold desktop:hover:opacity-85"
                    >
                      {phone}
                    </Link>
                    <Link
                      href={`mailto:${email}`}
                      className="-m-2 p-2 desktop:m-0 desktop:p-0 text-paragraph text-gold desktop:hover:opacity-85"
                    >
                      {email}
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-gold opacity-85">
            For more than 36 years, the Choice Property Group has built a
            trusted reputation through its comprehensive understanding of South
            Africa’s property market. As an independently grown business, the
            group combines deep local expertise with an extensive regional
            network, supported by dedicated specialists in lifestyle farming and
            agricultural properties. Clients are welcomed by our established
            presence in Hermanus and the expertise of our dedicated Farm Team,
            providing personalised guidance and professional service throughout
            the property journey.
          </p>
        </div>
        <div className="h-px bg-white/50 opacity-40" />
        <div className="flex flex-col gap-10 desktop:flex-row">
          <div className="flex flex-col gap-10 desktop:shrink-0">
            <div className="flex flex-col gap-3 desktop:w-[210px]">
              <h3 className="text-white">Head Office</h3>
              <div className="flex flex-col gap-1">
                <Link
                  href="mailto:info@choicenet.co.za"
                  className="-m-2 p-2 desktop:m-0 desktop:p-0 text-paragraph text-gold opacity-85 desktop:hover:opacity-100"
                >
                  info@choicenet.co.za
                </Link>
                <Link
                  href="tel:+27445335981"
                  className="-m-2 p-2 desktop:m-0 desktop:p-0 text-paragraph text-white opacity-85 desktop:hover:opacity-100"
                >
                  +27 44 533 5981
                </Link>
                <p className="text-white opacity-85">
                  Noel Centre, Plettenberg Bay
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-white">Hermanus</h3>
              <div className="flex flex-col gap-1">
                <Link
                  href="mailto:sherry@choicenet.co.za"
                  className="-m-2 p-2 desktop:m-0 desktop:p-0 text-paragraph text-gold opacity-85 desktop:hover:opacity-100"
                >
                  sherry@choicenet.co.za
                </Link>
                <Link
                  href="tel:+27720801199"
                  className="-m-2 p-2 desktop:m-0 desktop:p-0 text-paragraph text-white opacity-85 desktop:hover:opacity-100"
                >
                  +27 72 080 1199
                </Link>
              </div>
            </div>
          </div>
          <p className="text-white opacity-60">
            This invitation contains confidential information and is provided
            for the exclusive use of the selected persons to whom it is
            addressed. This invitation is for the sole purpose of the
            recipient’s consideration whether to proceed with an exclusive early
            analysis of the investment opportunity, prior to the formal market
            launch. Please note, this invitation is not intended to form the
            sole basis of a final investment decision and no legal relations
            shall be created by its issuing. The information contained in this
            document should be treated in a confidential manner and may not be
            reproduced or used in whole or in part for any other purposes, nor
            may it be disclosed or otherwise made available to any third party,
            without the express written consent of Choice. The information
            presented also does not purport to be all-inclusive or to contain
            all the information that a recipient may desire in deciding whether
            or not to proceed with a transaction. Choice therefore does not
            provide any representation or warranty, express or implied regarding
            the information provided and the recipient should make its own
            investigation of the information provided prior to concluding any
            investment transaction.
          </p>
        </div>
      </PageWrapper>
    </div>
  );
}
