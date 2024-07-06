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
  },
  {
    id: 2,
    title: 'Managing Scope Change Requests',
    content: `
      <h3>1. Evaluate the Change Request</h3>
      <p>First, I thoroughly review the change request to understand its impact on the project. This involves assessing the importance, urgency, and potential benefits of the requested change.</p>
      
      <h3>2. Assess Impact</h3>
      <p>I analyze how the change will affect the current sprint’s goals, resources, and timeline. This includes evaluating the impact on ongoing tasks, the team’s workload, and the overall project schedule.</p>
      
      <h3>3. Prioritize the Change</h3>
      <p>I prioritize the change based on its importance relative to the current sprint’s objectives. If the change is critical and high-priority, it might need immediate attention; otherwise, it can be deferred to a future sprint.</p>
      
      <h3>4. Communicate with Stakeholders</h3>
      <p>I communicate with stakeholders, including product owners, team members, and clients, to discuss the implications of the change. Transparency is key to ensuring everyone understands the potential trade-offs and benefits.</p>
      
      <h3>5. Decision Making</h3>
      <p>Based on the assessment and stakeholder input, I decide whether to incorporate the change into the current sprint. If the change is accepted, I adjust the sprint backlog accordingly. If it’s deferred, I document it for consideration in future sprints.</p>
      
      <h3>6. Adjust Plan and Resources</h3>
      <p>If the change is incorporated, I reallocate resources and adjust the plan to accommodate the new requirements. This might involve reprioritizing tasks, extending deadlines, or increasing team collaboration.</p>
      
      <h3>7. Document the Change</h3>
      <p>I document the change request, the decision made, and any adjustments to the sprint plan. This ensures a clear record of changes and helps in tracking the impact on the project.</p>
      
      <h3>8. Monitor and Adapt</h3>
      <p>Throughout the sprint, I monitor progress closely to ensure the team adapts to the changes effectively.</p>
    `,
    tag: 'project management'
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
