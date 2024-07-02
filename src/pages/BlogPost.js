import React from 'react';
import { useParams } from 'react-router-dom';
import './BlogPost.css';

const posts = [
  {
    id: 1,
    title: 'Handle A Conflict Between Team Members',
    content: `
      <h3>1. Address the Issue Early</h3>
      <p>As soon as I notice a conflict, I address it promptly to prevent it from escalating. Ignoring conflicts can lead to bigger issues and disrupt team dynamics.</p>
      <h3>2. Listen to Both Sides</h3>
      <p>I meet with the involved parties individually to understand their perspectives. Active listening helps in comprehending the root cause of the conflict and shows that I value their viewpoints.</p>
      <h3>3. Facilitate Open Communication</h3>
      <p>I bring the parties together for a mediated discussion, encouraging open and respectful communication. This allows each person to express their concerns and feelings directly.</p>
      <h3>4. Identify Common Ground</h3>
      <p>I help the team members find common ground and shared goals. Emphasizing mutual objectives can shift the focus from personal differences to team success.</p>
      <h3>5. Develop a Resolution Plan</h3>
      <p>Together, we create a plan to resolve the conflict, outlining specific actions and steps each party will take. This plan should be realistic and agreed upon by all involved.</p>
      <h3>6. Follow Up</h3>
      <p>I monitor the situation after the initial resolution to ensure that the conflict does not resurface. Regular check-ins help to reinforce positive behaviors and address any lingering issues.</p>
      <h3>7. Improve Work Processes</h3>
      <p>After resolving the conflict, I analyze the situation to identify any underlying process issues that may have contributed to the conflict. I then implement improvements to prevent similar conflicts in the future. This could include clearer communication protocols, better-defined roles and responsibilities, or enhanced collaboration tools.</p>
      <h3>8. Promote a Positive Team Culture</h3>
      <p>I foster an environment of mutual respect and collaboration through team-building activities and clear communication channels. A positive team culture can prevent conflicts from arising in the first place.</p>
    `,
    tag: 'leadership'
  }
];

const BlogPost = () => {
  const { id } = useParams();
  const post = posts.find((p) => p.id === parseInt(id));

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blog-post">
      <div className="post-card">
        <h1>{post.title}</h1>
        <div className="content" dangerouslySetInnerHTML={{ __html: post.content }}></div>
        <span className="tag">{post.tag}</span>
      </div>
    </div>
  );
};

export default BlogPost;
