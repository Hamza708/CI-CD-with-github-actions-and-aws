# Deploying Applications on EC2 Instances using GitHub Actions, Docker Compose, and Load Balancer / Auto Scaling Groups

Welcome to the EC2 GitHub Action with Docker Compose and Load Balancer / Auto Scaling Groups project! This repository is designed to help you deploy your application on EC2 instances using Docker Compose, along with Load Balancer and Auto Scaling Groups for scalability and high availability. We've included GitHub Actions workflows to automate the deployment process, making it easier for you to manage your infrastructure.

## Prerequisites

Before you begin, please ensure you have the following prerequisites:

- GitHub Actions: [Documentation](https://docs.github.com/en/actions)
- EC2 Instance(s): Set up your EC2 instance(s) where you'll deploy your application.
- Docker Compose: [Installation Guide](https://docs.docker.com/compose/install/)
- AWS Load Balancer / Auto Scaling Groups: Configure Load Balancer and Auto Scaling Groups for your EC2 instances.

## GitHub Action Workflow

This GitHub Actions workflow triggers on push to the `development` branch and performs the following steps:

1. **Checkout Repository:**
   Checks out the repository and switches to the `development` branch.

2. **Connect to EC2 using GitHub Actions runner:**
   Make sure your GitHub Actions workflow includes steps to establish a connection to your EC2 instances using the self-hosted GitHub Actions runner. This allows the runner to execute deployment tasks directly on your EC2 instances.

3. **Configure Load Balancer and Auto Scaling Groups:**
   Set up Load Balancer and Auto Scaling Groups to distribute traffic and scale your EC2 instances based on demand.

4. **Update Docker Compose file:**
   Update the `docker-compose.yml` file in your repository with your service configurations.

5. **Update GitHub Actions Workflow:**
   Customize the GitHub Actions workflow (`.github/workflows/deploy.yml`) if needed, adjusting any paths or commands as necessary.

6. **Push Changes:**
   Push changes to your GitHub repository.

7. **Monitor Execution:**
   Monitor the workflow execution in the Actions tab of your GitHub repository.

8. **Access Your Application:**
   Once the workflow completes successfully, access your application through the Load Balancer URL.
   
## Resources

Explore the following resources for more information:

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [AWS Load Balancer Documentation](https://aws.amazon.com/elasticloadbalancing/)
- [AWS Auto Scaling Documentation](https://aws.amazon.com/autoscaling/)

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please fork this repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
