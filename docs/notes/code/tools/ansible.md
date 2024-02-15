---
aliases: []
tags: []
---

# Ansible

```yaml
# ansible.yaml
- name: Configuration file
  hosts: all # apply tasks below to all nodes
  vars:
    foo: bar

  # Playbook
  tasks:
  
  # Play 1
  - name: Ensure NGINX is installed
    apt:
      name: nginx
      state: present
      update_cache: yes # update package manager before install
      
  # Play 2
  - name: Install several packages
    apt:
      name: "{{ item }}"
      update_cache: yes
    with_items:
      - package1
      - package2
```

Inventory file: collection of hosts
```yaml
# hosts
[production]
foo.example.com
bar.example.com

[staging]
staging.example.com
```

## Modules

[Ansible modules](https://docs.ansible.com/ansible/latest/module_plugin_guide/index.html) are scripts used to perform action on a managed node.
Here are the most-often used ones: 

- `apt` – apt package manager.  
- `yum` – yum package manager.  
- `copy` – Copies a file from the control node to the managed node.  
- `get_url` – Downloads a file from the web to the managed node.  
- `template` – Generates file from template and copies it to managed node.  
- `lineinfile` – Ensures a particular line is in a file.
- `replace` – Replaces all instances of a particular string in a file (regex).  
- `file` – Sets the attribute of a file, symlink, or directory.  
- `service` – Starts, stops, or restarts a service.  
- `user` – Manages OS user accounts.  
- `command` – Executes command on managed node (avoid if possible)  
- `debug` – Prints statements during execution for debugging

## Resources

- [ansible.com](https://www.ansible.com/) – Official website