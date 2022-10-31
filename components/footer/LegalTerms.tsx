import {FC} from 'react'
import NextLink from 'next/link';
import { Link } from '@mui/material';

interface FooterProps {
    legalWarning:string;
    linkLegalWarning:string;
    privacyPolicy:string;
    linkPrivacyPolicy:string;
    cookiesPolicy:string;
    linkCookiesPolicy:string;
}

export const LegalTerms: FC<FooterProps> = ({
    legalWarning,
    linkLegalWarning,
    privacyPolicy,
    linkPrivacyPolicy,
    cookiesPolicy,
    linkCookiesPolicy,
}) => {
  return (
    <>
        <NextLink href={linkLegalWarning} passHref>
            <Link variant="caption" mb={{xs: 1, sm:0}} sx={{color:"text.primary"}}>
                {legalWarning}
            </Link>
        </NextLink>
        <NextLink href={linkPrivacyPolicy} passHref>
            <Link variant="caption" mb={{xs: 1, sm:0}} sx={{color:"text.primary"}}>
                {privacyPolicy}
            </Link>
        </NextLink>
        <NextLink href={linkCookiesPolicy} passHref>
            <Link variant="caption" mb={{xs: 1, sm:0}} sx={{color:"text.primary"}}>
                {cookiesPolicy}
            </Link>
        </NextLink>
    </>
  )
}
