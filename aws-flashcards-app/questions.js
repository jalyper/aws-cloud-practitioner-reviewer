const questions = [
    // Domain 1: Cloud Concepts (24%)
    {
        domain: "Cloud Concepts",
        question: "What are the six pillars of the AWS Well-Architected Framework?",
        options: [
            "Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability",
            "Agility, Security, Durability, Performance, Scalability, High Availability",
            "Operational Excellence, IAM, Reliability, Performance, Cost, Fault Tolerance",
            "Security, Scalability, Elasticity, Cost Optimization, Durability, Performance"
        ],
        correctAnswer: "Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability",
        explanation: "The six pillars of the AWS Well-Architected Framework are Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, and Sustainability."
    },
    {
        domain: "Cloud Concepts",
        question: "Which migration strategy involves changing how an application is architected, typically by using cloud-native features?",
        options: [ "Rehosting", "Refactoring", "Replatforming", "Repurchasing" ],
        correctAnswer: "Refactoring",
        explanation: "<b>Refactoring (or re-architecting)</b> involves reimagining the application's architecture to be cloud-native. <br><br><b>Rehosting</b> is 'lift-and-shift' with no changes. <br><b>Replatforming</b> involves minor cloud optimizations. <br><b>Repurchasing</b> involves moving to a different product (SaaS)."
    },
    {
        domain: "Cloud Concepts",
        question: "What is an AWS Availability Zone (AZ)?",
        options: [
            "A separate geographical area, like a country or a city",
            "A content delivery network endpoint for caching data",
            "One or more discrete data centers with redundant power, networking, and connectivity",
            "A tool for managing permissions across multiple AWS accounts"
        ],
        correctAnswer: "One or more discrete data centers with redundant power, networking, and connectivity",
        explanation: "An Availability Zone (AZ) is a distinct location within an AWS Region that is engineered to be isolated from failures in other AZs. A Region consists of multiple AZs."
    },
    {
        domain: "Cloud Concepts",
        question: "Which AWS service provides recommendations to help you follow AWS best practices and optimize your environment?",
        options: ["AWS Inspector", "AWS CloudTrail", "AWS Config", "AWS Trusted Advisor"],
        correctAnswer: "AWS Trusted Advisor",
        explanation: "<b>AWS Trusted Advisor</b> inspects your AWS environment and makes recommendations for saving money, improving system performance, and closing security gaps."
    },
    {
        domain: "Cloud Concepts",
        question: "Which term describes the ability of a system to remain operational even if some of its components fail?",
        options: ["Elasticity", "Scalability", "Fault Tolerance", "Agility"],
        correctAnswer: "Fault Tolerance",
        explanation: "<b>Fault Tolerance</b> is the built-in redundancy of an application's components to ensure it remains operational during failures. For example, by deploying instances across multiple Availability Zones."
    },
    {
        domain: "Cloud Concepts",
        question: "Which AWS service provides a simple way to set up a new multi-account AWS environment?",
        options: ["AWS Organizations", "AWS Control Tower", "AWS Config", "AWS Resource Access Manager"],
        correctAnswer: "AWS Control Tower",
        explanation: "<b>AWS Control Tower</b> automates the setup of a new baseline AWS environment that is secure, well-architected, and ready to use with multiple accounts."
    },
    {
        domain: "Cloud Concepts",
        question: "What is the primary benefit of 'decoupling' application components in the cloud?",
        options: ["It increases performance by bundling components together", "It reduces interdependencies so that failures do not cascade", "It lowers cost by using a single, large server", "It simplifies the user interface"],
        correctAnswer: "It reduces interdependencies so that failures do not cascade",
        explanation: "Decoupling components, often with services like Amazon SQS, ensures that if one component fails or gets overloaded, the others can continue to function independently."
    },
    {
        domain: "Cloud Concepts",
        question: "A company wants to deploy its application to multiple AWS Regions to serve a global audience. This is an example of which cloud benefit?",
        options: ["High Availability", "Fault Tolerance", "Going Global in Minutes", "Elasticity"],
        correctAnswer: "Going Global in Minutes",
        explanation: "AWS's global infrastructure allows companies to easily deploy applications in multiple Regions around the world with just a few clicks, which is a key benefit of the cloud."
    },
    {
        domain: "Cloud Concepts",
        question: "Which of the following is a primary benefit of the 'pay-as-you-go' pricing model in AWS?",
        options: ["Paying a fixed monthly cost", "Avoiding large capital expenditures", "Receiving a dedicated hardware device", "Getting a personal account manager"],
        correctAnswer: "Avoiding large capital expenditures",
        explanation: "The pay-as-you-go model allows businesses to trade large upfront capital expenses (like buying physical servers) for smaller, variable operational expenses."
    },
    {
        domain: "Cloud Concepts",
        question: "A company is migrating an on-premises application to AWS. They want to make minimal changes and manage the operating system themselves. Which migration strategy is this?",
        options: ["Refactoring", "Replatforming", "Retiring", "Rehosting"],
        correctAnswer: "Rehosting",
        explanation: "<b>Rehosting</b>, also known as 'lift-and-shift', involves moving an application to the cloud with few or no changes. The company would still be responsible for managing the OS on the EC2 instance."
    },
    {
        domain: "Cloud Concepts",
        question: "Which of the following is a key principle of the AWS Well-Architected Framework's Reliability pillar?",
        options: ["Applying the principle of least privilege", "Automatically recovering from failure", "Tracking spending and usage", "Using serverless architectures"],
        correctAnswer: "Automatically recovering from failure",
        explanation: "The Reliability pillar focuses on designing systems that can automatically recover from infrastructure or service disruptions, dynamically acquire computing resources, and mitigate disruptions."
    },
    {
        domain: "Cloud Concepts",
        question: "What is the AWS Cloud Adoption Framework (CAF)?",
        options: ["A tool for estimating AWS costs", "A framework that helps organizations develop an effective plan for their cloud adoption journey", "A service for migrating databases", "A security assessment tool"],
        correctAnswer: "A framework that helps organizations develop an effective plan for their cloud adoption journey",
        explanation: "The <b>AWS CAF</b> provides guidance and best practices to help organizations build a comprehensive approach to cloud computing across the organization and throughout the IT lifecycle."
    },
    {
        domain: "Cloud Concepts",
        question: "What does the term 'economy of scale' mean in the context of the AWS Cloud?",
        options: ["Users pay less per unit when they consume more", "All services have a fixed monthly price", "Users get a dedicated hardware device", "Every service is free for the first year"],
        correctAnswer: "Users pay less per unit when they consume more",
        explanation: "Because AWS has millions of customers, it can achieve higher economies of scale, which translates into lower pay-as-you-go prices for customers."
    },

    // Domain 2: Security and Compliance (30%)
    {
        domain: "Security and Compliance",
        question: "Under the AWS Shared Responsibility Model, which task is a responsibility of the customer?",
        options: [
            "Securing the physical data centers",
            "Managing edge locations",
            "Setting up server-side encryption for S3 buckets",
            "Maintaining the virtualization infrastructure"
        ],
        correctAnswer: "Setting up server-side encryption for S3 buckets",
        explanation: "The customer is responsible for security *in* the cloud. This includes configuring security settings like encryption for their data. AWS is responsible for the underlying infrastructure."
    },
    {
        domain: "Security and Compliance",
        question: "What is the primary function of AWS Shield?",
        options: [
            "To protect against common web exploits like SQL injection",
            "To provide protection against Distributed Denial of Service (DDoS) attacks",
            "To manage encryption keys for your data",
            "To audit API calls within your AWS account"
        ],
        correctAnswer: "To provide protection against Distributed Denial of Service (DDoS) attacks",
        explanation: "<b>AWS Shield</b> is a managed DDoS protection service. AWS Shield Standard is enabled automatically for all AWS customers at no additional charge."
    },
    {
        domain: "Security and Compliance",
        question: "What is an IAM Policy?",
        options: [
            "A physical hardware device for secure authentication",
            "A service for managing billing across multiple accounts",
            "An object in AWS that, when associated with an identity or resource, defines their permissions",
            "A tool for migrating databases to the cloud"
        ],
        correctAnswer: "An object in AWS that, when associated with an identity or resource, defines their permissions",
        explanation: "An IAM Policy is a JSON document that explicitly lists permissions. You can attach policies to IAM users, groups, and roles."
    },
    {
        domain: "Security and Compliance",
        question: "Which service allows you to find and access AWS's security and compliance reports and select online agreements?",
        options: ["AWS Trusted Advisor", "Amazon Inspector", "AWS Artifact", "AWS Config"],
        correctAnswer: "AWS Artifact",
        explanation: "<b>AWS Artifact</b> is your go-to, central resource for compliance-related information. It provides on-demand access to AWS's security and compliance reports."
    },
    {
        domain: "Security and Compliance",
        question: "Which IAM entity is best suited for giving temporary access to AWS resources to an application running on an EC2 instance?",
        options: ["IAM User", "IAM Group", "IAM Role", "IAM Policy"],
        correctAnswer: "IAM Role",
        explanation: "An <b>IAM Role</b> is ideal for this scenario because it provides temporary security credentials that an EC2 instance can assume to access other AWS services without needing to store long-term keys."
    },
    {
        domain: "Security and Compliance",
        question: "Which service helps you audit the configuration of your AWS resources to ensure they comply with your internal policies?",
        options: ["Amazon GuardDuty", "AWS Config", "AWS Secrets Manager", "Amazon Macie"],
        correctAnswer: "AWS Config",
        explanation: "<b>AWS Config</b> is a service that enables you to assess, audit, and evaluate the configurations of your AWS resources. It continuously monitors and records your resource configurations."
    },
    {
        domain: "Security and Compliance",
        question: "Which action can a root user perform that a regular IAM user cannot, even with full administrative privileges?",
        options: ["Launch an EC2 instance", "Create an S3 bucket", "Change the AWS Support plan", "Create a new IAM user"],
        correctAnswer: "Change the AWS Support plan",
        explanation: "Only the AWS account root user can perform a few specific tasks, including changing the account's support plan, closing the account, and changing the root user's credentials."
    },
    {
        domain: "Security and Compliance",
        question: "A company wants to protect sensitive data in an S3 bucket by discovering and identifying personally identifiable information (PII). Which service should they use?",
        options: ["Amazon Inspector", "Amazon GuardDuty", "Amazon Macie", "AWS Shield"],
        correctAnswer: "Amazon Macie",
        explanation: "<b>Amazon Macie</b> is a fully managed data security and data privacy service that uses machine learning and pattern matching to discover and protect your sensitive data in AWS."
    },
    {
        domain: "Security and Compliance",
        question: "A company needs to ensure that developers cannot accidentally terminate a critical production EC2 instance. Which IAM feature can help prevent this?",
        options: ["AWS Shield Advanced", "Service Control Policies (SCPs)", "Termination Protection on the EC2 instance", "AWS WAF"],
        correctAnswer: "Termination Protection on the EC2 instance",
        explanation: "<b>Termination Protection</b> is an EC2 instance attribute that, when enabled, prevents the instance from being accidentally terminated via the console, CLI, or API."
    },
    {
        domain: "Security and Compliance",
        question: "What is the primary purpose of a Network Access Control List (NACL)?",
        options: [
            "To act as a stateful firewall for an EC2 instance",
            "To act as a stateless firewall for a VPC subnet",
            "To distribute incoming traffic across multiple instances",
            "To inspect application traffic for SQL injection"
        ],
        correctAnswer: "To act as a stateless firewall for a VPC subnet",
        explanation: "NACLs operate at the subnet level and are stateless, meaning they evaluate both inbound and outbound traffic rules for every packet, regardless of any previous traffic."
    },
    {
        domain: "Security and Compliance",
        question: "Your company has multiple AWS accounts and wants to apply a consistent set of security rules to all of them. For example, you want to block all users, including root, from disabling AWS CloudTrail. Which service allows this?",
        options: ["IAM Policies", "AWS Config", "Service Control Policies (SCPs)", "AWS Identity Center"],
        correctAnswer: "Service Control Policies (SCPs)",
        explanation: "<b>Service Control Policies (SCPs)</b> are a feature of AWS Organizations that enable you to apply permission guardrails to all accounts under an organization. They can restrict actions for all IAM users, including the root user."
    },
    {
        domain: "Security and Compliance",
        question: "An administrator needs to create a new IAM user with the exact same permissions as an existing IAM user. What is the most efficient way to do this?",
        options: ["Manually create a new policy for the new user", "Add the new user to the same group(s) as the existing user", "Clone the existing user using the AWS CLI", "Temporarily assign the existing user's access keys to the new user"],
        correctAnswer: "Add the new user to the same group(s) as the existing user",
        explanation: "Using IAM groups to manage permissions is a best practice. Instead of attaching policies to individual users, you attach them to a group, and all users in that group inherit the permissions."
    },
    {
        domain: "Security and Compliance",
        question: "Which service should be used to securely store, rotate, and manage access to secrets like database credentials and API keys?",
        options: ["AWS Key Management Service (KMS)", "AWS Secrets Manager", "AWS Certificate Manager", "AWS WAF"],
        correctAnswer: "AWS Secrets Manager",
        explanation: "<b>AWS Secrets Manager</b> is specifically designed to help you protect secrets needed to access your applications, services, and IT resources. It enables you to easily rotate, manage, and retrieve secrets."
    },
    {
        domain: "Security and Compliance",
        question: "A security audit requires a log of all API calls made to an organization's AWS account. Which service provides this information?",
        options: ["Amazon CloudWatch", "AWS CloudTrail", "AWS Config", "Amazon GuardDuty"],
        correctAnswer: "AWS CloudTrail",
        explanation: "<b>AWS CloudTrail</b> monitors and records account activity across your AWS infrastructure, giving you control over storage, analysis, and remediation actions. It provides a history of API calls."
    },

    // Domain 3: Technology (34%)
    {
        domain: "Technology",
        question: "Which service offers object storage with virtually unlimited capacity?",
        options: [ "Amazon S3", "Amazon EBS", "Amazon EFS", "Amazon RDS" ],
        correctAnswer: "Amazon S3",
        explanation: "<b>Amazon S3 (Simple Storage Service)</b> is an object storage service that offers industry-leading scalability, data availability, security, and performance. EBS and EFS are block and file storage, respectively, while RDS is a database service."
    },
    {
        domain: "Technology",
        question: "Which compute service allows you to run code without provisioning or managing servers?",
        options: ["Amazon EC2", "Amazon Lightsail", "AWS Lambda", "AWS Elastic Beanstalk"],
        correctAnswer: "AWS Lambda",
        explanation: "<b>AWS Lambda</b> is the serverless compute service that runs code in response to events and automatically manages the underlying compute resources for you."
    },
    {
        domain: "Technology",
        question: "What is the primary function of an Amazon EC2 Auto Scaling group?",
        options: [
            "To distribute traffic across multiple instances",
            "To automatically adjust the number of EC2 instances to meet demand",
            "To provide persistent block storage for instances",
            "To create a private network connection to AWS"
        ],
        correctAnswer: "To automatically adjust the number of EC2 instances to meet demand",
        explanation: "<b>Auto Scaling</b> helps you maintain application availability and allows you to automatically add or remove EC2 instances according to conditions you define."
    },
    {
        domain: "Technology",
        question: "Which database is a fully managed NoSQL database service that provides fast and predictable performance?",
        options: ["Amazon RDS", "Amazon Redshift", "Amazon Aurora", "Amazon DynamoDB"],
        correctAnswer: "Amazon DynamoDB",
        explanation: "<b>Amazon DynamoDB</b> is the NoSQL key-value database that is fully managed and serverless, offering single-digit millisecond performance at any scale."
    },
    {
        domain: "Technology",
        question: "Which service would you use to create a private network connection between your on-premises data center and AWS?",
        options: ["AWS VPN", "Amazon VPC Peering", "AWS Direct Connect", "Internet Gateway"],
        correctAnswer: "AWS Direct Connect",
        explanation: "<b>AWS Direct Connect</b> is a cloud service solution that makes it easy to establish a dedicated, private network connection from your premises to AWS."
    },
    {
        domain: "Technology",
        question: "Which networking component allows communication between a VPC and the internet?",
        options: [
            "NAT Gateway",
            "Internet Gateway",
            "VPC Endpoint",
            "Network ACL"
        ],
        correctAnswer: "Internet Gateway",
        explanation: "An <b>Internet Gateway</b> is a horizontally scaled, redundant, and highly available VPC component that allows communication between your VPC and the internet."
    },
    {
        domain: "Technology",
        question: "What is the most cost-effective S3 storage class for data that is infrequently accessed but requires millisecond retrieval times?",
        options: ["S3 Standard", "S3 Glacier Instant Retrieval", "S3 Standard-IA", "S3 One Zone-IA"],
        correctAnswer: "S3 Standard-IA",
        explanation: "<b>S3 Standard-IA (Infrequent Access)</b> is designed for this exact use case. S3 Glacier Instant Retrieval is for archival data, and S3 One Zone-IA stores data in only one AZ."
    },
    {
        domain: "Technology",
        question: "A developer needs to run a Docker container on AWS but wants to avoid managing the underlying EC2 instances. Which service should they use?",
        options: ["Amazon EC2", "AWS Lambda", "AWS Fargate", "AWS Elastic Beanstalk"],
        correctAnswer: "AWS Fargate",
        explanation: "<b>AWS Fargate</b> is a serverless compute engine for containers that works with both Amazon ECS and EKS. It removes the need to provision and manage servers."
    },
    {
        domain: "Technology",
        question: "Which AWS service would you use to create a managed relational database?",
        options: ["Amazon DynamoDB", "Amazon S3", "Amazon ElastiCache", "Amazon RDS"],
        correctAnswer: "Amazon RDS",
        explanation: "<b>Amazon RDS (Relational Database Service)</b> makes it easy to set up, operate, and scale a relational database in the cloud. DynamoDB is NoSQL, ElastiCache is an in-memory cache, and S3 is object storage."
    },
    {
        domain: "Technology",
        question: "Which service acts as a global CDN, caching content closer to end-users to reduce latency?",
        options: ["Amazon S3 Transfer Acceleration", "Elastic Load Balancing", "Amazon CloudFront", "AWS Direct Connect"],
        correctAnswer: "Amazon CloudFront",
        explanation: "<b>Amazon CloudFront</b> is a fast content delivery network (CDN) service that securely delivers data, videos, applications, and APIs to customers globally with low latency."
    },
    {
        domain: "Technology",
        question: "What is the function of an AWS Internet Gateway?",
        options: [
            "To provide a private, dedicated connection to AWS",
            "To allow resources in a private subnet to access the internet",
            "To act as a firewall for a VPC",
            "To enable communication between a VPC and the public internet"
        ],
        correctAnswer: "To enable communication between a VPC and the public internet",
        explanation: "An <b>Internet Gateway</b> is a VPC component that allows communication between resources in your VPC and the internet. It serves as a target in your route tables for internet-bound traffic."
    },
    {
        domain: "Technology",
        question: "A website experiences a huge surge in traffic every evening. Which AWS service can automatically add more EC2 instances to handle the load and remove them when the traffic subsides?",
        options: ["Elastic Load Balancing", "Amazon Route 53", "AWS Auto Scaling", "Amazon CloudFront"],
        correctAnswer: "AWS Auto Scaling",
        explanation: "<b>AWS Auto Scaling</b> monitors your applications and automatically adjusts capacity to maintain steady, predictable performance at the lowest possible cost. ELB distributes traffic but doesn't add/remove instances."
    },
    {
        domain: "Technology",
        question: "A startup needs to host a simple web application but wants to avoid the complexity of managing servers, databases, and load balancers. Which service provides a pre-configured environment to just upload code?",
        options: ["Amazon EC2", "AWS Lambda", "AWS Fargate", "AWS Elastic Beanstalk"],
        correctAnswer: "AWS Elastic Beanstalk",
        explanation: "<b>AWS Elastic Beanstalk</b> is a Platform as a Service (PaaS) that handles the deployment, capacity provisioning, load balancing, and auto-scaling, allowing developers to focus solely on their code."
    },
    {
        domain: "Technology",
        question: "You need to store frequently accessed data for a website with high availability and durability. The data must be accessible with low latency worldwide. Which is the BEST storage service for the website's assets?",
        options: ["Amazon S3 Standard", "Amazon EFS", "Amazon EBS", "S3 Glacier Deep Archive"],
        correctAnswer: "Amazon S3 Standard",
        explanation: "<b>Amazon S3 Standard</b> is the ideal choice. It's designed for frequently accessed data, provides high durability by storing data across multiple AZs, and can be used with Amazon CloudFront for low-latency global delivery."
    },
    {
        domain: "Technology",
        question: "A financial services company must retain trade records for 7 years. This data is almost never accessed after the first month, but must be retrievable within 12 hours for audits. Which is the MOST cost-effective storage solution?",
        options: ["S3 Standard-IA", "S3 Intelligent-Tiering", "S3 Glacier Flexible Retrieval", "S3 Glacier Deep Archive"],
        correctAnswer: "S3 Glacier Deep Archive",
        explanation: "<b>S3 Glacier Deep Archive</b> is AWS's lowest-cost storage class and is designed for long-term retention of data that is accessed rarely. The 12-hour retrieval time fits the audit requirement perfectly."
    },
    {
        domain: "Technology",
        question: "A media company has video files with unpredictable access patterns. Sometimes a video is viral and accessed millions of times; other times, it's not accessed for months. Which S3 storage class would automatically optimize costs for this workload?",
        options: ["S3 Standard", "S3 One Zone-IA", "S3 Intelligent-Tiering", "S3 Glacier Flexible Retrieval"],
        correctAnswer: "S3 Intelligent-Tiering",
        explanation: "<b>S3 Intelligent-Tiering</b> is designed for data with unknown or changing access patterns. It automatically moves data to the most cost-effective access tier without performance impact or operational overhead."
    },
    {
        domain: "Technology",
        question: "You have a large amount of data on-premises that you need to transfer to AWS S3. Your office has a slow and unreliable internet connection. Which service can you use to physically transfer petabytes of data?",
        options: ["AWS Direct Connect", "Amazon S3 Transfer Acceleration", "AWS Snowball", "AWS DataSync"],
        correctAnswer: "AWS Snowball",
        explanation: "The <b>AWS Snow Family</b>, including AWS Snowball, provides physical devices to migrate large amounts of data into and out of the AWS Cloud when a network connection is not feasible."
    },
    {
        domain: "Technology",
        question: "Which AWS service is a managed message queue for decoupling application components?",
        options: ["Amazon SNS", "Amazon SQS", "AWS Step Functions", "Amazon MQ"],
        correctAnswer: "Amazon SQS",
        explanation: "<b>Amazon SQS (Simple Queue Service)</b> is a fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications."
    },
    {
        domain: "Technology",
        question: "A company needs a simple, scalable file storage solution for use with multiple EC2 instances simultaneously. The storage should be accessible via the NFS protocol. Which service is the best fit?",
        options: ["Amazon S3", "Amazon EBS", "Amazon EFS", "AWS Storage Gateway"],
        correctAnswer: "Amazon EFS",
        explanation: "<b>Amazon EFS (Elastic File System)</b> provides a simple, scalable, fully managed elastic NFS file system for use with AWS Cloud services and on-premises resources."
    },
    {
        domain: "Technology",
        question: "An application requires a database that can scale globally and handle millions of requests per second with single-digit millisecond latency. Which database is designed for this?",
        options: ["Amazon Aurora", "Amazon Redshift", "Amazon RDS for MySQL", "Amazon DynamoDB"],
        correctAnswer: "Amazon DynamoDB",
        explanation: "<b>Amazon DynamoDB</b> is a key-value and document database that delivers single-digit millisecond performance at any scale, making it ideal for high-traffic, global applications."
    },
    {
        domain: "Technology",
        question: "You need to run a large data analytics job on a petabyte-scale dataset. Which service is purpose-built for data warehousing and analytics?",
        options: ["Amazon RDS", "Amazon DynamoDB", "Amazon Redshift", "Amazon ElastiCache"],
        correctAnswer: "Amazon Redshift",
        explanation: "<b>Amazon Redshift</b> is a fully managed, petabyte-scale data warehouse service in the cloud. It's optimized for high-performance analysis and reporting of large datasets."
    },
    {
        domain: "Technology",
        question: "A company wants to establish a secure, private connection between its on-premises network and its AWS VPC over the public internet. Which service should they use?",
        options: ["AWS Direct Connect", "Amazon VPC Peering", "AWS Site-to-Site VPN", "Internet Gateway"],
        correctAnswer: "AWS Site-to-Site VPN",
        explanation: "An <b>AWS Site-to-Site VPN</b> connection creates a secure, encrypted tunnel between your data center or branch office and your AWS cloud resources over the public internet."
    },

    // Domain 4: Billing and Pricing (12%)
    {
        domain: "Billing and Pricing",
        question: "Which EC2 pricing model offers the largest discount in exchange for a 1- or 3-year commitment?",
        options: ["On-Demand Instances", "Spot Instances", "Reserved Instances", "Dedicated Hosts"],
        correctAnswer: "Reserved Instances",
        explanation: "<b>Reserved Instances</b> provide a significant discount (up to 72%) compared to On-Demand pricing in exchange for a long-term commitment."
    },
    {
        domain: "Billing and Pricing",
        question: "Which AWS tool allows you to set custom cost and usage alerts?",
        options: ["AWS Cost Explorer", "AWS Budgets", "AWS Trusted Advisor", "AWS Pricing Calculator"],
        correctAnswer: "AWS Budgets",
        explanation: "<b>AWS Budgets</b> gives you the ability to set custom budgets that alert you when your costs or usage exceed (or are forecasted to exceed) your budgeted amount."
    },
    {
        domain: "Billing and Pricing",
        question: "What is a primary benefit of using Consolidated Billing for multiple AWS accounts?",
        options: [
            "Each account gets its own separate invoice",
            "It allows for volume pricing discounts and shared Reserved Instances",
            "It triples the Free Tier usage for each account",
            "It removes the need for IAM users"
        ],
        correctAnswer: "It allows for volume pricing discounts and shared Reserved Instances",
        explanation: "A key benefit of Consolidated Billing is that you can combine usage from all accounts to qualify for volume pricing discounts and share Reserved Instance discounts."
    },
    {
        domain: "Billing and Pricing",
        question: "Which AWS Support plan provides access to a Technical Account Manager (TAM)?",
        options: ["Developer", "Business", "Enterprise", "Basic"],
        correctAnswer: "Enterprise",
        explanation: "The Enterprise and Enterprise On-Ramp support plans provide access to a Technical Account Manager (TAM)."
    },
    {
        domain: "Billing and Pricing",
        question: "What is the key benefit of using Spot Instances for EC2?",
        options: [
            "They provide a fixed, long-term capacity reservation",
            "They offer the highest level of performance",
            "They offer up to a 90% discount compared to On-Demand prices for fault-tolerant workloads",
            "They come with a dedicated Technical Account Manager"
        ],
        correctAnswer: "They offer up to a 90% discount compared to On-Demand prices for fault-tolerant workloads",
        explanation: "<b>Spot Instances</b> let you take advantage of unused EC2 capacity in the AWS cloud and are available at a steep discount, ideal for workloads that can be interrupted."
    },
    {
        domain: "Billing and Pricing",
        question: "Which tool can you use to estimate the cost of your planned AWS architecture?",
        options: ["AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator", "AWS Cost and Usage Report"],
        correctAnswer: "AWS Pricing Calculator",
        explanation: "The <b>AWS Pricing Calculator</b> lets you model your solutions before building them, explore the price points, and review the calculations behind your estimates."
    },
    {
        domain: "Billing and Pricing",
        question: "A company has a steady, predictable workload that will run on EC2 for the next 3 years. To achieve the highest possible discount, which pricing option should they choose?",
        options: ["On-Demand Instances", "Spot Instances", "A 3-year, All Upfront Reserved Instance", "A 1-year, No Upfront Reserved Instance"],
        correctAnswer: "A 3-year, All Upfront Reserved Instance",
        explanation: "Reserved Instances offer the biggest discounts for long-term commitments. A 3-year term offers a larger discount than a 1-year term, and paying All Upfront provides the highest discount of all."
    },
    {
        domain: "Billing and Pricing",
        question: "Which of the following services is always free, with no charges, under the AWS Free Tier?",
        options: ["A small EC2 instance for 12 months", "5 GB of Amazon S3 storage", "AWS Identity and Access Management (IAM)", "25 GB of DynamoDB storage per month"],
        correctAnswer: "AWS Identity and Access Management (IAM)",
        explanation: "Core services like IAM, AWS Organizations, and Consolidated Billing are part of the 'Always Free' category and do not incur any charges."
    },
    {
        domain: "Billing and Pricing",
        question: "A user wants to find out which of their EC2 instances are underutilized and could be downsized to save money. Which AWS tool provides this specific recommendation?",
        options: ["AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator", "AWS Trusted Advisor"],
        correctAnswer: "AWS Trusted Advisor",
        explanation: "The Cost Optimization pillar of <b>AWS Trusted Advisor</b> specifically checks for idle and underutilized resources, like EC2 instances, and provides recommendations to reduce costs."
    },
    {
        domain: "Billing and Pricing",
        question: "Which AWS service is offered at no cost to the user?",
        options: ["Amazon EC2 (On-Demand)", "Amazon S3 (Standard Storage)", "AWS Auto Scaling", "Amazon Redshift"],
        correctAnswer: "AWS Auto Scaling",
        explanation: "Features like AWS Auto Scaling, AWS CloudFormation, and IAM are provided at no additional charge. You only pay for the AWS resources (like EC2 instances or S3 buckets) they manage."
    },
    {
        domain: "Billing and Pricing",
        question: "For which EC2 pricing model do you bid on unused capacity, and your instances run only when your bid exceeds the current price?",
        options: ["On-Demand", "Reserved Instances", "Spot Instances", "Savings Plans"],
        correctAnswer: "Spot Instances",
        explanation: "<b>Spot Instances</b> are a cost-effective choice if you can be flexible about when your applications run and if your applications can be interrupted. They use unused EC2 capacity and offer steep discounts."
    },
    {
        domain: "Billing and Pricing",
        question: "A user is trying to figure out their monthly AWS bill. Which tool provides the most detailed breakdown of costs by service, usage type, and region?",
        options: ["AWS Pricing Calculator", "AWS Budgets", "AWS Trusted Advisor", "AWS Cost and Usage Report"],
        correctAnswer: "AWS Cost and Usage Report",
        explanation: "The <b>AWS Cost and Usage Report (CUR)</b> contains the most comprehensive set of AWS cost and usage data available, including additional metadata about services, pricing, and reservations."
    },
    // ################# NEW QUESTIONS BATCH 3 ADDED BELOW #################
    {
        domain: "Cloud Concepts",
        question: "A company needs to experiment with a new application, but its resource needs are uncertain. Which advantage of the cloud is MOST relevant here?",
        options: ["High availability", "Fault tolerance", "Stop guessing capacity", "Go global in minutes"],
        correctAnswer: "Stop guessing capacity",
        explanation: "The cloud allows you to eliminate guessing about your infrastructure capacity needs. You can provision the resources you need and then scale up or down as your needs change, preventing wasted resources or poor performance."
    },
    {
        domain: "Technology",
        question: "A user wants to quickly launch a pre-configured virtual private server (VPS) with a simple management interface, including OS, web server, and DNS. Which service is designed for this purpose?",
        options: ["Amazon EC2", "Amazon Lightsail", "AWS Elastic Beanstalk", "AWS Lambda"],
        correctAnswer: "Amazon Lightsail",
        explanation: "<b>Amazon Lightsail</b> is designed to be the easiest way to launch and manage a VPS. It includes everything you need to jumpstart your project – a virtual machine, SSD-based storage, data transfer, DNS management, and a static IP."
    },
    {
        domain: "Security and Compliance",
        question: "What is the primary function of a Security Group in an Amazon VPC?",
        options: [
            "It acts as a firewall at the subnet level, controlling inbound and outbound traffic.",
            "It acts as a firewall at the instance level, controlling inbound and outbound traffic.",
            "It provides a dedicated, private network connection from on-premises to AWS.",
            "It automatically detects malicious activity in your AWS accounts."
        ],
        correctAnswer: "It acts as a firewall at the instance level, controlling inbound and outbound traffic.",
        explanation: "<b>Security Groups</b> act as a virtual firewall for your EC2 instances to control incoming and outgoing traffic. They are stateful, meaning if you send a request from your instance, the response traffic is automatically allowed."
    },
    {
        domain: "Technology",
        question: "A research team needs to process a massive dataset and wants to use a shared file system that can be mounted by hundreds of EC2 instances simultaneously. The file system must support high-throughput access. Which service should they use?",
        options: ["Amazon EBS Multi-Attach", "Amazon EFS", "Amazon S3", "AWS Storage Gateway"],
        correctAnswer: "Amazon EFS",
        explanation: "<b>Amazon EFS (Elastic File System)</b> is a fully managed, scalable file system designed for shared access. It can be mounted on thousands of EC2 instances concurrently and is suitable for high-throughput workloads."
    },
    {
        domain: "Billing and Pricing",
        question: "A company has purchased a 3-year EC2 Reserved Instance. In the second year, they transition to a new EC2 instance family. What can they do to avoid losing their investment?",
        options: [
            "Cancel the Reserved Instance for a full refund.",
            "Sell the Reserved Instance on the RI Marketplace.",
            "The investment is lost and cannot be recovered.",
            "Convert the EC2 RI to an S3 RI."
        ],
        correctAnswer: "Sell the Reserved Instance on the RI Marketplace.",
        explanation: "If your needs change, you can sell your Standard Reserved Instances in the <b>RI Marketplace</b>. This allows you to recover the remaining value of your commitment."
    },
    {
        domain: "Technology",
        question: "You need to store archival data that is accessed less than once a year. The data must be stored for 10 years for compliance reasons, and retrieval times of up to 48 hours are acceptable. What is the MOST cost-effective storage option?",
        options: ["S3 Standard-IA", "S3 Glacier Instant Retrieval", "S3 Glacier Flexible Retrieval", "S3 Glacier Deep Archive"],
        correctAnswer: "S3 Glacier Deep Archive",
        explanation: "<b>S3 Glacier Deep Archive</b> is the lowest-cost storage option in AWS and is designed for long-term data archival where retrieval times of 12-48 hours are acceptable."
    },
    {
        domain: "Security and Compliance",
        question: "An application requires access to an S3 bucket. According to security best practices, how should the application be granted permissions?",
        options: [
            "Store IAM user access keys directly in the application's source code.",
            "Create an IAM user and assign its keys to all developers.",
            "Create an IAM role with the necessary permissions and have the application assume the role.",
            "Use the AWS account root user credentials."
        ],
        correctAnswer: "Create an IAM role with the necessary permissions and have the application assume the role.",
        explanation: "Using an <b>IAM Role</b> is the most secure method. It provides temporary credentials to the application, avoiding the need to store long-term, static access keys in the code or on an instance."
    },
    {
        domain: "Technology",
        question: "A company wants to manage its infrastructure using code, allowing them to version control their environment and deploy it in a repeatable manner. Which AWS service facilitates this?",
        options: ["AWS Elastic Beanstalk", "AWS Config", "AWS CloudFormation", "AWS OpsWorks"],
        correctAnswer: "AWS CloudFormation",
        explanation: "<b>AWS CloudFormation</b> gives you an easy way to model a collection of related AWS and third-party resources, provision them quickly and consistently, and manage them throughout their lifecycles. This is known as Infrastructure as Code (IaC)."
    },
    {
        domain: "Billing and Pricing",
        question: "Which of the following is a direct benefit of using AWS Regions?",
        options: [
            "It allows you to place resources in separate data centers within the same city for low latency.",
            "It provides a single, central location for all global AWS services.",
            "It allows you to place resources closer to your end-users and meet data residency requirements.",
            "It guarantees that all services will be available at all times."
        ],
        correctAnswer: "It allows you to place resources closer to your end-users and meet data residency requirements.",
        explanation: "Deploying applications in different AWS Regions allows you to position your infrastructure closer to your customers to reduce latency, and it can also help you meet legal and compliance requirements for data sovereignty."
    },
    {
        domain: "Security and Compliance",
        question: "Which AWS service helps you centrally manage and automate backup policies across AWS services?",
        options: ["Amazon S3 Lifecycle Policies", "AWS Backup", "Amazon EBS Snapshots", "AWS Storage Gateway"],
        correctAnswer: "AWS Backup",
        explanation: "<b>AWS Backup</b> is a fully managed backup service that makes it easy to centralize and automate the back up of data across AWS services in the cloud and on premises."
    },
    {
        domain: "Technology",
        question: "A team needs to send notifications to a large number of subscribers via email and SMS. Which service is best suited for this publish/subscribe (pub/sub) messaging pattern?",
        options: ["Amazon SQS", "Amazon MQ", "Amazon Connect", "Amazon SNS"],
        correctAnswer: "Amazon SNS",
        explanation: "<b>Amazon SNS (Simple Notification Service)</b> is a fully managed pub/sub messaging service that enables you to send messages to a large number of subscribers through multiple endpoints, including email, SMS, and HTTP."
    },
    {
        domain: "Cloud Concepts",
        question: "A company wants to migrate to the cloud but is unsure which services and configurations would be most cost-effective for their workloads. Which AWS tool should they use first?",
        options: ["AWS Cost Explorer", "AWS Budgets", "AWS Pricing Calculator", "AWS Trusted Advisor"],
        correctAnswer: "AWS Pricing Calculator",
        explanation: "The <b>AWS Pricing Calculator</b> is designed for planning and estimation. It allows you to model a solution and explore different price points before you start using AWS."
    },
    {
        domain: "Technology",
        question: "A data processing workflow has several steps that must be executed in a specific order, with the output of one step being the input for the next. Which service helps you coordinate these components and steps?",
        options: ["AWS Lambda", "Amazon SQS", "AWS Step Functions", "AWS Batch"],
        correctAnswer: "AWS Step Functions",
        explanation: "<b>AWS Step Functions</b> is a serverless function orchestrator that makes it easy to sequence AWS Lambda functions and multiple AWS services into business-critical applications."
    },
    {
        domain: "Security and Compliance",
        question: "Which of the following is a responsibility of AWS under the Shared Responsibility Model?",
        options: ["Configuring security groups and NACLs", "Encrypting customer data stored in S3", "Managing IAM user permissions", "Patching the firmware of the underlying physical servers"],
        correctAnswer: "Patching the firmware of the underlying physical servers",
        explanation: "AWS is responsible for 'security *of* the cloud', which includes the physical hardware, the global infrastructure, and the virtualization layer. Customers are responsible for everything they put *in* the cloud."
    },
    {
        domain: "Billing and Pricing",
        question: "If a company stops using AWS, what happens to their monthly bill?",
        options: ["They pay a fixed termination fee.", "They continue to pay for their reserved capacity.", "They stop paying for all services.", "They pay only for the resources they are still using (if any)."],
        correctAnswer: "They pay only for the resources they are still using (if any).",
        explanation: "With the pay-as-you-go model, you only pay for the services you consume. If you terminate all your resources, you stop incurring charges (with the exception of any active subscriptions or reservations)."
    },

    // ################# ADDITIONAL PRACTICE QUESTIONS #################
    
    // Database Service Comparisons
    {
        domain: "Technology",
        question: "A company needs a database for a mobile gaming application that will have unpredictable traffic patterns and requires single-digit millisecond response times. Which database service is most appropriate?",
        options: ["Amazon RDS", "Amazon Aurora", "Amazon DynamoDB", "Amazon DocumentDB"],
        correctAnswer: "Amazon DynamoDB",
        explanation: "<b>Amazon DynamoDB</b> is purpose-built for applications that need single-digit millisecond latency at any scale. It's serverless and automatically scales up and down, making it ideal for gaming applications with unpredictable traffic."
    },
    {
        domain: "Technology", 
        question: "A startup is building a traditional e-commerce application that requires complex queries, joins, and ACID transactions. They want a managed database that can automatically scale storage. Which service should they choose?",
        options: ["Amazon DynamoDB", "Amazon Aurora", "Amazon DocumentDB", "Amazon ElastiCache"],
        correctAnswer: "Amazon Aurora",
        explanation: "<b>Amazon Aurora</b> is a MySQL and PostgreSQL-compatible relational database that automatically scales storage up to 128 TB, provides ACID transactions, and supports complex SQL queries and joins needed for traditional applications."
    },
    {
        domain: "Technology",
        question: "A company is migrating from MongoDB and needs a fully managed document database that's compatible with MongoDB APIs. Which AWS service should they use?",
        options: ["Amazon RDS", "Amazon DynamoDB", "Amazon DocumentDB", "Amazon Aurora"],
        correctAnswer: "Amazon DocumentDB",
        explanation: "<b>Amazon DocumentDB</b> is a fully managed document database service that supports MongoDB workloads and APIs, making it ideal for migrations from on-premises MongoDB deployments."
    },
    {
        domain: "Technology",
        question: "A financial services company needs a relational database with strict compliance requirements and wants full control over database engine configuration, patches, and updates. Which service provides this level of control?",
        options: ["Amazon Aurora Serverless", "Amazon DynamoDB", "Amazon RDS", "Amazon DocumentDB"],
        correctAnswer: "Amazon RDS",
        explanation: "<b>Amazon RDS</b> gives you more control over the database engine compared to Aurora, allowing you to manage patches, updates, and specific configurations while still being managed infrastructure."
    },
    
    // Security Best Practices
    {
        domain: "Security and Compliance",
        question: "Which security practice should be implemented to ensure that even AWS administrators cannot access your encrypted data?",
        options: ["Enable AWS CloudTrail logging", "Use customer-managed keys in AWS KMS", "Enable MFA on the root account", "Create separate IAM policies for each user"],
        correctAnswer: "Use customer-managed keys in AWS KMS",
        explanation: "With <b>customer-managed keys in AWS KMS</b>, you control the encryption keys. AWS administrators cannot access your encrypted data because they don't have access to your encryption keys, ensuring client-side encryption control."
    },
    {
        domain: "Security and Compliance",
        question: "A company wants to ensure that their EC2 instances can only be accessed from their corporate network and never from the public internet. What is the most secure approach?",
        options: ["Use Security Groups to allow only port 22", "Deploy instances in private subnets with no internet gateway", "Enable AWS Shield Advanced", "Use Network ACLs to block all traffic"],
        correctAnswer: "Deploy instances in private subnets with no internet gateway",
        explanation: "Deploying instances in <b>private subnets</b> ensures they have no direct internet connectivity. Combined with VPN or Direct Connect from the corporate network, this provides the most secure isolation from public internet access."
    },
    {
        domain: "Security and Compliance",
        question: "What is the security best practice for handling application secrets like database passwords in EC2 instances?",
        options: ["Store them in environment variables", "Hard-code them in the application", "Store them in AWS Secrets Manager and retrieve them programmatically", "Store them in S3 buckets"],
        correctAnswer: "Store them in AWS Secrets Manager and retrieve them programmatically",
        explanation: "<b>AWS Secrets Manager</b> securely stores, rotates, and manages access to secrets. Applications should retrieve secrets programmatically at runtime rather than storing them in code or environment variables."
    },
    {
        domain: "Security and Compliance",
        question: "A company wants to monitor and get alerts when someone creates new IAM users or changes IAM policies. Which service combination provides this capability?",
        options: ["AWS Config + Amazon SNS", "AWS CloudTrail + Amazon CloudWatch", "Amazon GuardDuty + AWS Lambda", "AWS Trusted Advisor + Amazon SES"],
        correctAnswer: "AWS CloudTrail + Amazon CloudWatch",
        explanation: "<b>AWS CloudTrail</b> logs all API calls including IAM changes. <b>Amazon CloudWatch</b> can create alarms based on CloudTrail events and send notifications when specific IAM actions occur."
    },
    {
        domain: "Security and Compliance",
        question: "Which AWS service helps detect potentially compromised instances by analyzing VPC Flow Logs, DNS logs, and CloudTrail events?",
        options: ["AWS Config", "Amazon Inspector", "Amazon GuardDuty", "AWS Security Hub"],
        correctAnswer: "Amazon GuardDuty",
        explanation: "<b>Amazon GuardDuty</b> is a threat detection service that uses machine learning to analyze VPC Flow Logs, DNS logs, and CloudTrail events to identify potentially malicious activity and compromised instances."
    },
    
    // Edge Locations and Content Delivery
    {
        domain: "Technology",
        question: "A global media company wants to deliver video content to users worldwide with the lowest possible latency. Which AWS service and strategy should they use?",
        options: ["Store all content in a single S3 region", "Use Amazon CloudFront with multiple edge locations", "Deploy EC2 instances in every AWS region", "Use Amazon EFS with regional replication"],
        correctAnswer: "Use Amazon CloudFront with multiple edge locations",
        explanation: "<b>Amazon CloudFront</b> with edge locations caches content closer to end-users globally, dramatically reducing latency for content delivery. Edge locations are separate from AWS regions and provide faster access."
    },
    {
        domain: "Cloud Concepts",
        question: "How do edge locations benefit global application performance differently than AWS Regions?",
        options: ["Edge locations provide compute services while Regions only provide storage", "Edge locations cache content closer to users while Regions host the origin infrastructure", "Edge locations are cheaper than Regions for all services", "Edge locations provide better security than Regions"],
        correctAnswer: "Edge locations cache content closer to users while Regions host the origin infrastructure",
        explanation: "Edge locations are part of CloudFront's CDN and cache static content closer to end-users for faster delivery. AWS Regions host the origin servers and full range of AWS services, while edge locations focus on content caching and delivery."
    },
    {
        domain: "Technology",
        question: "A company has a dynamic web application that serves both static assets (images, CSS) and dynamic content (user data). What's the best strategy for optimal performance?",
        options: ["Store everything in one S3 bucket", "Use CloudFront for static content and direct Region access for dynamic content", "Use only EC2 instances with local storage", "Store all content in Amazon EFS"],
        correctAnswer: "Use CloudFront for static content and direct Region access for dynamic content",
        explanation: "This is the optimal hybrid approach: <b>CloudFront</b> caches and delivers static assets from edge locations for speed, while dynamic content is served directly from the origin (Region) since it can't be effectively cached."
    },
    {
        domain: "Technology",
        question: "Which scenario would benefit MOST from AWS Global Accelerator rather than CloudFront?",
        options: ["Serving static website content", "Caching frequently accessed images", "Improving performance for non-HTTP protocols like gaming or VoIP", "Storing and retrieving large files"],
        correctAnswer: "Improving performance for non-HTTP protocols like gaming or VoIP",
        explanation: "<b>AWS Global Accelerator</b> improves performance for any application using TCP or UDP protocols by routing traffic through AWS's global network. CloudFront is specifically for HTTP/HTTPS content delivery and caching."
    },
    {
        domain: "Cloud Concepts",
        question: "A company wants to ensure their disaster recovery strategy takes advantage of AWS's global infrastructure. What is a key benefit of multi-region deployment?",
        options: ["Lower costs in all regions", "Automatic failover without any configuration", "Geographic distribution reduces risk of total service loss", "Faster development cycles"],
        correctAnswer: "Geographic distribution reduces risk of total service loss",
        explanation: "Multi-region deployment provides <b>geographic redundancy</b>, ensuring that if an entire region becomes unavailable due to natural disasters or other issues, your application can continue running from another region."
    },
    {
        domain: "Security and Compliance",
        question: "Which security benefit does using multiple AWS Availability Zones within a region provide?",
        options: ["Lower costs for security services", "Automatic encryption of data in transit", "Fault tolerance and high availability for applications", "Compliance with all global regulations"],
        correctAnswer: "Fault tolerance and high availability for applications",
        explanation: "Deploying across multiple <b>Availability Zones</b> within a region provides fault tolerance and high availability. If one AZ experiences issues, your application can continue running from other AZs in the same region."
    },

    // ################# MIGRATION & CAF QUESTIONS FROM IMAGES #################
    
    {
        domain: "Cloud Concepts",
        question: "The migration team wants to make sure the organization considers a company-wide change management strategy for successful cloud adoption. Which Cloud Adoption Framework (CAF) perspective would they use?",
        options: ["People", "Business", "Security", "Operations"],
        correctAnswer: "People",
        explanation: "The <b>People perspective</b> of the AWS CAF focuses on change management, workforce transformation, and organizational change readiness - exactly what's needed for company-wide adoption strategies."
    },
    {
        domain: "Technology",
        question: "During their upcoming migration, the database administrator would like to move from their current database to an AWS managed database to offload some of the database administration. They would also like to use a tool to plan, assess, convert, and migrate the database. Which migration solution would BEST meet their needs?",
        options: ["AWS Migration Hub", "AWS Schema Conversion Tool (AWS SCT)", "AWS Database Migration Service (AWS DMS)", "Migration Evaluator"],
        correctAnswer: "AWS Database Migration Service (AWS DMS)",
        explanation: "<b>AWS Database Migration Service (AWS DMS)</b> helps migrate databases to AWS with minimal downtime. It can plan, assess, convert schemas, and migrate data from various database engines to AWS managed databases."
    },
    {
        domain: "Cloud Concepts", 
        question: "What are the seven migration strategies that are commonly used when customers migrate to the AWS Cloud?",
        options: [
            "Relocate, Rehost, Replatform, Refactor, Repurchase, Retain, and Retire",
            "There are not seven, there are three (Assess, Mobilize, and Migrate and Modernize)",
            "Relocate, Remediate, Retrofit, Refactor, Regrade, Retool, Remove", 
            "Business, People, Governance, Platform, Security, Operations, IT"
        ],
        correctAnswer: "Relocate, Rehost, Replatform, Refactor, Repurchase, Retain, and Retire",
        explanation: "The <b>7 R's of migration</b> are the seven common strategies: <b>Relocate</b> (VMware to AWS), <b>Rehost</b> (lift-and-shift), <b>Replatform</b> (lift-tinker-shift), <b>Refactor</b> (re-architect), <b>Repurchase</b> (move to SaaS), <b>Retain</b> (keep on-premises), and <b>Retire</b> (decommission)."
    },
    {
        domain: "Technology",
        question: "A media company is in the migrate and modernize phase of their migration and wants a centralized location to view their migration tasks and progress. Which migration service would BEST meet their needs?",
        options: ["Migration Evaluator", "AWS Application Discovery Service", "AWS Application Migration Service", "AWS Migration Hub"],
        correctAnswer: "AWS Migration Hub",
        explanation: "<b>AWS Migration Hub</b> provides a central location to track the progress of application migrations across multiple AWS and partner solutions. It gives you a single place to discover existing servers, plan migrations, and track the status of each application migration."
    },

    // ################# ADDITIONAL MIGRATION & NETWORKING QUESTIONS #################
    
    {
        domain: "Cloud Concepts",
        question: "A retail company is just getting starting with their migration to the AWS Cloud. They need help building a business case to secure funding from their chief financial officer (CFO) and stakeholders. Which migration service would BEST meet their needs?",
        options: ["Migration Evaluator", "AWS Application Migration Service", "AWS Application Discovery Service", "AWS Migration Hub"],
        correctAnswer: "Migration Evaluator",
        explanation: "<b>Migration Evaluator</b> (formerly TSO Logic) helps organizations build a data-driven business case for AWS by providing cost projections, savings estimates, and detailed assessments to present to executives and stakeholders."
    },
    {
        domain: "Technology",
        question: "An engineering company is migrating large amounts of proprietary intellectual property design files from their on-premises data center to the AWS Cloud. They want a service that has fully managed support for secure file transfers with several different protocols, like Secure File Transfer Protocol (SFTP) and File Transfer Protocol Secure (FTPS). Which online migration solution would meet their needs?",
        options: ["AWS Direct Connect", "AWS DataSync", "AWS Transfer Family", "AWS Snowball Edge Storage Optimized Devices"],
        correctAnswer: "AWS Transfer Family",
        explanation: "<b>AWS Transfer Family</b> is a fully managed service that supports secure file transfers using SFTP, FTPS, and FTP protocols directly into and out of Amazon S3 or Amazon EFS, making it perfect for secure file transfer workflows."
    },
    {
        domain: "Technology",
        question: "A credit card company is migrating large amounts of sensitive data from their on-premises storage to the AWS Cloud. They want to automate the process and schedule the migration during off peak times. They also want to be able to check on progress and task reporting. They do not have a dedicated private connection between their data center and the AWS Cloud. Which online migration solution would meet their needs?",
        options: ["AWS Transfer Family", "AWS Snowball Edge Storage Optimized Devices", "AWS DataSync", "Virtual private gateway"],
        correctAnswer: "AWS DataSync",
        explanation: "<b>AWS DataSync</b> is an online data transfer service that automates and accelerates moving data between on-premises and AWS. It provides scheduling, progress monitoring, and detailed reporting capabilities over internet connections."
    },
    {
        domain: "Technology",
        question: "A customer is exploring solutions to establish secure, encrypted connections between their on-premises networks at their data centers and branch offices. They are looking for the MOST cost-effective way to connect their office sites to other sites and their AWS services. They are not looking to increase the amount of bandwidth. Which solution would BEST meet their needs?",
        options: ["AWS Client VPN", "AWS PrivateLink", "AWS Site-to-Site VPN", "AWS Direct Connect"],
        correctAnswer: "AWS Site-to-Site VPN",
        explanation: "<b>AWS Site-to-Site VPN</b> is the most cost-effective solution for secure, encrypted connections between on-premises networks and AWS over the internet. It doesn't require dedicated hardware like Direct Connect, making it more affordable."
    },
    {
        domain: "Technology",
        question: "A customer wants a way to establish a dedicated connection from their on-premises network to an Amazon VPC. They need a solution that provides a more consistent network experience with increased bandwidth. Which type of connection to the AWS Cloud would BEST meet their needs?",
        options: ["Internet gateway", "Virtual private gateway", "Amazon CloudFront", "AWS Direct Connect"],
        correctAnswer: "AWS Direct Connect",
        explanation: "<b>AWS Direct Connect</b> provides a dedicated, private connection from your on-premises network to AWS with consistent network performance, higher bandwidth options, and reduced network costs compared to internet-based connections."
    },
    {
        domain: "Technology",
        question: "What is the primary function of a domain name service (DNS)?",
        options: [
            "It translates human-readable domain names to machine readable IP addresses.",
            "It filters inbound and outbound traffic to Amazon EC2 instances in a virtual private cloud (VPC).", 
            "It provisions a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.",
            "It allows you to create a subsection of a virtual private cloud (VPC) where you can isolate resources and control access."
        ],
        correctAnswer: "It translates human-readable domain names to machine readable IP addresses.",
        explanation: "<b>DNS (Domain Name Service)</b> is a fundamental internet service that translates human-friendly domain names (like amazon.com) into machine-readable IP addresses (like 192.0.2.1) that computers use to locate and connect to services."
    },

    // ################# ADDITIONAL NETWORKING & MIGRATION QUESTIONS #################
    
    {
        domain: "Cloud Concepts",
        question: "An environmental agency is migrating their applications to the AWS Cloud. During the migration they also want to look for ways to modernize and reduce costs of their applications. Which migration service would BEST meet their needs?",
        options: ["Migration Evaluator", "AWS Application Discovery Service", "AWS Migration Hub", "AWS Application Migration Service"],
        correctAnswer: "AWS Application Discovery Service",
        explanation: "<b>AWS Application Discovery Service</b> helps enterprises plan migration projects by gathering information about their on-premises data centers, including server utilization and dependency mapping, which helps identify modernization opportunities and cost reduction strategies."
    },
    {
        domain: "Technology",
        question: "What is networking in the AWS Cloud?",
        options: [
            "Logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define",
            "Physically isolated data centers or set of data centers within an AWS Region", 
            "Interconnected devices that can exchange data and resources",
            "System that translates readable domain names to IP addresses"
        ],
        correctAnswer: "Interconnected devices that can exchange data and resources",
        explanation: "<b>Networking in the AWS Cloud</b> refers to the interconnected infrastructure that allows devices, services, and resources to communicate and exchange data, enabling distributed applications and services to work together across the AWS infrastructure."
    },
    {
        domain: "Technology",
        question: "A customer is creating an Amazon VPC for their application. They want to create a private segment in the Amazon VPC so that resources launched can be isolated from users on the internet. Which network component would BEST meet their needs?",
        options: ["A public subnet", "An Availability Zone instead of a subnet", "Either a public subnet or a private subnet would work", "A private subnet"],
        correctAnswer: "A private subnet",
        explanation: "A <b>private subnet</b> is a range of IP addresses in your VPC that doesn't have a route to an internet gateway, ensuring that resources launched in it cannot be directly accessed from the internet, providing the isolation they need."
    },
    {
        domain: "Security and Compliance",
        question: "A retail customer is hosting their application in an Amazon VPC and wants to configure traffic rules for the Amazon EC2 instances running in a public subnet. The application requires multiple rules to be defined at the instance level. Which solution or feature would meet their needs?",
        options: [
            "Set up network access control lists (network ACLs) for the Amazon EC2 instances based on the application requirements.",
            "Set up security groups for the Amazon EC2 instances based on the application requirements.", 
            "Change the public subnet to a private subnet to avoid public internet access.",
            "Set up a virtual private gateway based on the application requirements."
        ],
        correctAnswer: "Set up security groups for the Amazon EC2 instances based on the application requirements.",
        explanation: "<b>Security Groups</b> act as virtual firewalls at the instance level and support multiple rules for controlling inbound and outbound traffic. They are stateful and ideal for instance-level traffic control with multiple rules."
    },
    {
        domain: "Technology",
        question: "A financial customer needs a content delivery solution to deliver required training videos and static content to their financial consultants worldwide. They want to make sure the solution provides low latency. Which AWS solution would BEST meet their needs?",
        options: ["Amazon CloudFront", "Amazon Route 53", "AWS Direct Connect", "AWS Global Accelerator"],
        correctAnswer: "Amazon CloudFront",
        explanation: "<b>Amazon CloudFront</b> is AWS's content delivery network (CDN) that caches and delivers static content like videos and training materials from edge locations worldwide, providing low latency access to global users."
    },
    {
        domain: "Technology",
        question: "A media company needs a service to manage their domain registrations with different providers. They will also be using the service to route internet traffic to their resources hosted both in the AWS Cloud and elsewhere. Which AWS solution would BEST meet their needs?",
        options: ["Amazon Route 53", "AWS Direct Connect", "Amazon CloudFront", "AWS Global Accelerator"],
        correctAnswer: "Amazon Route 53",
        explanation: "<b>Amazon Route 53</b> is AWS's scalable DNS service that can manage domain registrations and route internet traffic to AWS resources and external endpoints, providing both domain management and traffic routing capabilities."
    },

    // ################# ADDITIONAL VPN & NETWORKING QUESTIONS #################
    
    {
        domain: "Technology",
        question: "An enterprise customer just merged with another company and needs a way to quickly scale and provide a way for the new worldwide sales force to access their AWS resources. They want a fully managed service with advanced authentication for their new remote workers. Which solution would BEST meet their needs?",
        options: ["AWS PrivateLink", "AWS Direct Connect", "AWS Site-to-Site VPN", "AWS Client VPN"],
        correctAnswer: "AWS Client VPN",
        explanation: "<b>AWS Client VPN</b> is a fully managed service that provides secure remote access to AWS resources and on-premises networks. It supports advanced authentication methods and can quickly scale to support many remote users worldwide."
    },
    {
        domain: "Technology",
        question: "A company wants to establish a secure, private connection between their on-premises data center and their Amazon VPC to create a hybrid cloud architecture. Which component should they use to help ensure a secure connection?",
        options: ["Route table", "Virtual private gateway", "Internet gateway", "Subnet"],
        correctAnswer: "Virtual private gateway",
        explanation: "A <b>Virtual Private Gateway</b> is the VPN concentrator on the Amazon side of the VPN connection between your VPC and your on-premises network. It's required to establish Site-to-Site VPN connections for hybrid cloud architectures."
    },
    {
        domain: "Security and Compliance",
        question: "A customer is creating their application resources in their virtual private cloud (VPC) subnets. They want to secure their resources in the cloud, specifically the networking traffic protection tasks. Which component is the customer responsible for, based on the shared responsibility model?",
        options: [
            "Securing access to the AWS data centers and facilities that run AWS Cloud services",
            "Securing the hardware that runs the AWS Cloud services",
            "Securing the software that runs the AWS Cloud services", 
            "Securing network traffic with the subnets and resources with Network access control lists (network ACLs) and security groups"
        ],
        correctAnswer: "Securing network traffic with the subnets and resources with Network access control lists (network ACLs) and security groups",
        explanation: "Under the AWS Shared Responsibility Model, customers are responsible for security <b>in</b> the cloud, which includes configuring network security controls like NACLs and Security Groups to protect their applications and data."
    },
    {
        domain: "Technology", 
        question: "A customer is exploring edge networking services to improve application availability, performance, and security. They need a solution for traffic routing when something goes wrong in one of their application's locations. Specifically, it takes into account the endpoint health, user location, and policies. Which AWS solution would BEST meet their needs?",
        options: ["Amazon Route 53", "Amazon CloudFront", "AWS Direct Connect", "AWS Global Accelerator"],
        correctAnswer: "Amazon Route 53",
        explanation: "<b>Amazon Route 53</b> provides intelligent traffic routing based on health checks, geographic location, latency, and routing policies. It can automatically route traffic away from unhealthy endpoints to healthy ones, making it ideal for improving application availability and performance."
    },

    // ################# ADDITIONAL APPLICATION & SERVICE QUESTIONS #################
    
    {
        domain: "Technology",
        question: "The owner of a large hardware company wants to automate and optimize the company's marketing emails to enhance customer engagement. Which AWS service would work well for this use case?",
        options: ["Amazon AppStream 2.0", "AWS Amplify", "Amazon Simple Email Service (Amazon SES)", "Amazon Connect"],
        correctAnswer: "Amazon Simple Email Service (Amazon SES)",
        explanation: "<b>Amazon SES</b> is a scalable email service designed for marketing communications, transactional emails, and bulk email sending. It provides features for optimizing email delivery rates and managing customer engagement."
    },
    {
        domain: "Technology",
        question: "A developer is working on a full-stack application hosted on AWS. They are interested in streamlining the development process by quickly adding features like authentication and storage with minimal infrastructure management. Which AWS service would provide the best solution for the developer's needs?",
        options: ["AWS Amplify", "AWS Well-Architected Tool", "AWS AppSync", "AWS CodePipeline"],
        correctAnswer: "AWS Amplify",
        explanation: "<b>AWS Amplify</b> is a platform that enables developers to build full-stack applications quickly with built-in features like authentication, storage, and APIs, while minimizing infrastructure management and accelerating development."
    },
    {
        domain: "Technology",
        question: "A manufacturing company needs a way to monitor its assembly-line equipment for any performance issues. Which AWS service can help them build a monitoring solution for the equipment?",
        options: ["Amazon AppStream 2.0", "AWS IoT Core", "Amazon Connect", "AWS Well-Architected Tool"],
        correctAnswer: "AWS IoT Core",
        explanation: "<b>AWS IoT Core</b> is a managed cloud service that lets connected devices interact with cloud applications and other devices. It's perfect for monitoring industrial equipment and collecting performance data from assembly-line machinery."
    },
    {
        domain: "Billing and Pricing",
        question: "A company is using a large Amazon EC2 instance type for a low-traffic website, but monitoring shows CPU usage rarely exceeds 10 percent. What is a good next step?",
        options: [
            "Rightsize the EC2 instance to a smaller type to match the actual workload.",
            "Automate the scaling of EC2 instances based on traffic.",
            "Upgrade the EC2 instance for better data protection.",
            "Decrease the number of instances to save money."
        ],
        correctAnswer: "Rightsize the EC2 instance to a smaller type to match the actual workload.",
        explanation: "<b>Rightsizing</b> is a key cost optimization practice. When an instance is significantly oversized for its workload (only 10% CPU usage), switching to a smaller, appropriately-sized instance type will reduce costs while maintaining performance."
    },
    {
        domain: "Technology",
        question: "A small technology startup needs to provide its remote workforce with secure access to their work environment. The employees must be able to accomplish the same tasks as if they were on a physical office computer. Which AWS service can they use to provide this remote access?",
        options: ["Amazon WorkSpaces", "Amazon AppStream 2.0", "Amazon Connect", "AWS AppSync"],
        correctAnswer: "Amazon WorkSpaces",
        explanation: "<b>Amazon WorkSpaces</b> is a fully managed desktop-as-a-service (DaaS) solution that provides secure, cloud-based virtual desktops. It allows remote workers to access their work environment from anywhere, just like using a physical office computer."
    },
    {
        domain: "Cloud Concepts",
        question: "A startup is hosting a critical web application on a single Amazon EC2 instance in one Availability Zone. After a brief outage, they decide to reevaluate their architecture. What practice from the AWS Well-Architected Framework could improve this situation?",
        options: [
            "Reduce resource usage to avoid overprovisioning (Cost Optimization).",
            "Deploy instances across multiple Availability Zones for fault tolerance (Reliability).",
            "Scale up the instance to handle more traffic (Performance Efficiency).", 
            "Increase the instance's firewall protection (Security)."
        ],
        correctAnswer: "Deploy instances across multiple Availability Zones for fault tolerance (Reliability).",
        explanation: "The <b>Reliability pillar</b> of the AWS Well-Architected Framework emphasizes designing systems that can automatically recover from failure. Deploying across multiple Availability Zones provides fault tolerance and prevents single points of failure."
    },

    // ################# ADDITIONAL STORAGE SERVICE QUESTIONS #################
    
    {
        domain: "Billing and Pricing",
        question: "What is a key characteristic of Amazon S3 storage classes pricing?",
        options: [
            "All storage classes cost the same but differ in retrieval speed.",
            "All storage classes have the same minimum storage duration requirement.",
            "Pricing varies based on storage costs, retrieval fees, and minimum storage durations.",
            "Pricing is exclusively determined by the geographic region of the bucket."
        ],
        correctAnswer: "Pricing varies based on storage costs, retrieval fees, and minimum storage durations.",
        explanation: "Amazon S3 storage classes have different pricing structures that vary based on <b>storage costs</b> (per GB), <b>retrieval fees</b> (per GB retrieved), and <b>minimum storage durations</b> (e.g., Glacier has minimum 90-day storage). This allows you to optimize costs based on access patterns."
    },
    {
        domain: "Technology",
        question: "Which statement BEST describes Amazon FSx?",
        options: [
            "A block storage service that provides high performance volumes for EC2 instances",
            "A service used to set up private file sharing within an on-premises data center only",
            "A fully managed service that provides cost-effective, scalable file storage built on widely used file systems",
            "An object storage solution designed for archiving rarely accessed data"
        ],
        correctAnswer: "A fully managed service that provides cost-effective, scalable file storage built on widely used file systems",
        explanation: "<b>Amazon FSx</b> is a fully managed file system service that supports popular file systems like Windows File Server and Lustre. It provides high-performance, scalable file storage optimized for compute workloads."
    },
    {
        domain: "Technology",
        question: "AnyCompany Technology needs to implement a centralized storage solution for their development team that allows multiple Amazon EC2 instances to access the same file system simultaneously. The solution needs to: provide a fully managed service, automatically scale, eliminate the need for capacity planning, support Linux-based applications with standard file system interfaces, maintain consistent low-latency access across development environments, and provide high durability without requiring complex replication setups. Which AWS storage service is BEST suited for this scenario?",
        options: ["Amazon Elastic Block Storage (Amazon EBS)", "Amazon FSx", "Amazon Elastic File System (Amazon EFS)", "Amazon S3"],
        correctAnswer: "Amazon Elastic File System (Amazon EFS)",
        explanation: "<b>Amazon EFS</b> is perfect for this scenario as it provides a fully managed NFS file system that multiple EC2 instances can access simultaneously. It automatically scales, supports standard POSIX file system interfaces for Linux, and provides consistent performance with high durability built-in."
    },
    {
        domain: "Technology",
        question: "AnyCompany Software is deploying a critical production application on Amazon EC2 instances with several Amazon Elastic Block Store (Amazon EBS) volumes containing application code and customer data. The team is looking for an AWS service they can use to back up the data for their application. The solution needs to: create regular data backups, create duplicate environments for testing, create a disaster recovery strategy, create full or incremental backups without impacting application performance, and provide cost-effective for long-term storage. Which AWS service or feature would BEST meet the requirements in the scenario?",
        options: ["Amazon Elastic File System (Amazon EFS)", "Amazon S3 Glacier Flexible Retrieval", "EBS snapshots", "Amazon FSx"],
        correctAnswer: "EBS snapshots",
        explanation: "<b>EBS snapshots</b> are specifically designed for backing up EBS volumes. They create incremental, point-in-time backups without impacting performance, can be automated for regular backups, support disaster recovery by restoring to new volumes, and are cost-effective as they only store changed blocks."
    },

    // ################# ADDITIONAL STORAGE & DEPLOYMENT QUESTIONS #################
    
    {
        domain: "Technology",
        question: "Which statement BEST describes AWS Storage Gateway?",
        options: [
            "A physical hardware appliance that must be installed in a data center",
            "A migration tool that automatically transfers all on-premises data to the cloud",
            "A virtual private network that creates secure connections between a data center and AWS",
            "A hybrid cloud storage solution that provides on-premises applications with access to virtually unlimited cloud storage"
        ],
        correctAnswer: "A hybrid cloud storage solution that provides on-premises applications with access to virtually unlimited cloud storage",
        explanation: "<b>AWS Storage Gateway</b> is a hybrid cloud storage service that connects on-premises environments to AWS cloud storage (S3, Glacier, EBS). It enables seamless integration between on-premises and cloud storage through a VM or hardware appliance."
    },
    {
        domain: "Cloud Concepts",
        question: "A nonprofit organization is migrating all of their resources to the AWS Cloud. They are trying to decide which AWS Region to deploy their resources to. Which option lists the factors the organization needs to consider when deciding where to place their cloud resources?",
        options: [
            "Compliance, proximity to customers, feature availability, and pricing",
            "Software licensing, hardware specifications, cloud skillset of staff, and customer reviews",
            "Server uptime, application performance, employee satisfaction, and office location",
            "Network speed, data encryption, user interface, and storage capacity"
        ],
        correctAnswer: "Compliance, proximity to customers, feature availability, and pricing",
        explanation: "When selecting an AWS Region, organizations should consider: <b>Compliance</b> (data residency requirements), <b>proximity to customers</b> (latency), <b>feature availability</b> (service availability), and <b>pricing</b> (regional cost differences)."
    },
    {
        domain: "Technology",
        question: "A team at a biomedical tech company is tasked with deploying a new medical application across multiple AWS Regions to help maintain high availability and fault tolerance. The application consists of several components, including a web server, a database, and a message queue. The deployment needs to be consistent and repeatable and should minimize manual errors through automation. Which approach is BEST suited for deploying this application according to the needs of automation and consistency?",
        options: [
            "Using the AWS Management Console to manually deploy each component in every Region",
            "Combining console and programmatic approaches for different tiers of the application",
            "Writing a script to programmatically deploy the application using the cloud provider's API",
            "Using an Infrastructure as Code (IaC) service such as AWS CloudFormation to deploy the application"
        ],
        correctAnswer: "Using an Infrastructure as Code (IaC) service such as AWS CloudFormation to deploy the application",
        explanation: "<b>AWS CloudFormation</b> provides Infrastructure as Code (IaC) capabilities, allowing you to define your entire infrastructure in templates. This ensures consistent, repeatable deployments across multiple regions while minimizing manual errors through automation."
    },
    {
        domain: "Technology",
        question: "AnyCompany AI is developing a machine learning application that requires extremely fast data processing for temporary model training datasets. The data is generated during training sessions and stored separately in persistent storage. The team is trying to determine the best storage solution to use alongside their application. The solution needs to meet the following criteria: highest possible I/O performance, directly attached to their Amazon EC2 instances, and temporary storage – data does not persist when instances are stopped or terminated. Which AWS service BEST meets the temporary storage needs described in this scenario?",
        options: ["Amazon S3", "Amazon Elastic Block Store (Amazon EBS)", "Amazon EC2 instance store", "Amazon Elastic File System (Amazon EFS)"],
        correctAnswer: "Amazon EC2 instance store",
        explanation: "<b>Amazon EC2 instance store</b> provides the highest I/O performance as it's directly attached NVMe SSD storage. It's perfect for temporary data like ML training datasets since data doesn't persist when instances stop, and it offers the fastest possible storage performance."
    },
    {
        domain: "Technology",
        question: "AnyCompany Marketing needs a storage solution that they can use to distribute large collections of high-resolution images, videos, and design files for their clients' campaigns. Some assets are accessed frequently, whereas others are archived for occasional reference. The solution needs to meet the following criteria: unlimited storage capacity, high durability, easy file sharing through URLs, ability to organize assets by client and project, cost-efficient storage options, and security controls to prevent unauthorized access for specific assets. Which AWS service is BEST suited for the storage needs described in this scenario?",
        options: ["Amazon Elastic File System (Amazon EFS)", "Amazon Elastic Block Storage (Amazon EBS)", "Amazon S3", "Amazon FSx"],
        correctAnswer: "Amazon S3",
        explanation: "<b>Amazon S3</b> is perfect for this use case as it provides virtually unlimited object storage, multiple storage classes for cost optimization, easy URL-based sharing, bucket/folder organization, fine-grained access controls, and 99.999999999% (11 9's) durability."
    },
    {
        domain: "Technology",
        question: "AnyCompany Commerce has recently migrated its main application to an Amazon EC2 instance in AWS. As their customer base expands, they are exploring storage solutions that can grow dynamically with the application's data needs. The solution needs to meet the following criteria: have persistent block storage that provides consistent low-latency performance, be able to be attached to and detached from the EC2 instance as needed, independently resize storage capacity without disrupting the instance, and create point-in-time backups to protect critical customer and inventory data. Which AWS storage service would BEST meet the requirements in the scenario?",
        options: ["Amazon Elastic File System (Amazon EFS)", "Amazon Elastic Block Store (Amazon EBS)", "Amazon FSx", "Amazon S3"],
        correctAnswer: "Amazon Elastic Block Store (Amazon EBS)",
        explanation: "<b>Amazon EBS</b> provides persistent block storage that can be attached/detached from EC2 instances, offers consistent performance, can be resized independently without downtime, and supports point-in-time snapshots for backup and disaster recovery."
    }
]; 
