import NewsTitle from "./NewsTitle";
import NewsBody from "./NewsBody";
import Author from "./Author";

function NewsContent({ title, body, author }) {
  return (
    <div style={{ 
      border: "1px solid black", 
      padding: "10px", 
      margin: "10px 0"
    }}>
      <NewsTitle title={title} />
      <NewsBody body={body} />
      <Author author={author} />
    </div>
  );
}

export default NewsContent;
