type Props = {
  collection?: any;
};

export default function Breadcrumb({ collection }: Props) {
  return (
    <nav aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-4">
        <li>
          <div className="flex items-center">
            <a
              href="#"
              className="mr-4 text-sm font-medium uppercase text-gray-900"
            >
              Home
            </a>
            <svg
              viewBox="0 0 6 20"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              className="h-5 w-auto text-gray-300"
            >
              <path
                d="M4.878 4.34H3.551L.27 16.532h1.327l3.281-12.19z"
                fill="currentColor"
              />
            </svg>
          </div>
        </li>
        <li>
          <div className="flex items-center">
            <a
              href="#"
              className="mr-4 text-sm font-medium uppercase text-gray-900"
            >
              {collection.title}
            </a>
          </div>
        </li>
      </ol>
    </nav>
  );
}
