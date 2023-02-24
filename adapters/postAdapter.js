export default class PostAdapter {
  constructor ({ _id, title, description, postedBy, dateCreated, likes, image, fullText }) {
    this.id = _id || Date.now();
    this.title = title || "title";
    this.postedBy = postedBy || "-";
    this.description = description || "-";
    this.dateCreated = dateCreated || "-";
    this.likes = likes || [];
    this.image = image || null;
    this.fullText = fullText || "-";
  }
}
