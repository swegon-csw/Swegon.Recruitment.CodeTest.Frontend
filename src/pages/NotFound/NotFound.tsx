import { FiHome } from "react-icons/fi";
import { Link } from "react-router-dom";

import Button from "@/components/common/Button/Button";

import { ErrorCode, ErrorDescription,ErrorTitle, NotFoundContainer } from "./NotFound.styled";

export default function NotFound() {
  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorTitle>Page Not Found</ErrorTitle>
      <ErrorDescription>
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </ErrorDescription>
      <Link to="/">
        <Button size="large">
          <FiHome /> Go to Homepage
        </Button>
      </Link>
    </NotFoundContainer>
  );
}
