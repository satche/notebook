---
aliases: []
tags: []
---

# Terraform

```shell
$ terraform init     # init .terraform folder with files
$ terraform validate # check configuration
$ terraform plan     # show changes
$ terraform apply    # apply changes
$ terraform destroy  # remove oldest infrastructure
```

```yaml
# terraform.tf – Configuration file
terraform {
	required_providers {
		aws = {
			source  = "hashicorp/aws"
			version = "~> 4.16"
		}
	}
	required_version = ">= 1.2.0"
}

provider "aws" {
  region  = "us-west-2"
}

resource "aws_instance" "example" {
  ami           = "ami-830c94e3" # Ubuntu server
  instance_type = "t2.micro"

  tags = {
    Name = "ExampleAppServerInstance"
  }
}

resource "aws_security_group" "instance" {
	name = "terraform-example-instance"
	ingress {
		from_port   = 8080
		to_port     = 8080
		protocol    = "tcp"
		cidy_blocks = ["0.0.0.0/0"]
	}
}
```

## Concepts

- **Modules** – Container for multiple resources that are used together
- **Execution plan** – What operations to do to reach the desired state
- **Providers** – Plugins that talks to specific cloud platform via its API
- **State file** – `terraform.tfstate`
	- Maps between TF name and resource identification in the cloud
	- Track resource dependencies for deletion
	- Used as cache to avoid query all resources in the cloud

## Resources

- [terraform.io](https://www.terraform.io/) – Official website